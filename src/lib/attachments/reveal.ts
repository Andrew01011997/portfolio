import type { Attachment } from 'svelte/attachments';
import { prefersReducedMotion } from 'svelte/motion';
import { easing } from '#lib/motion/index.js';

interface RevealOptions {
	/** Extra delay on top of the automatic stagger */
	delay?: number;
	/** Start offset in px */
	y?: number;
}

const DURATION = 800;
/** Elements that come into view together are staggered by this much, in DOM order */
const STAGGER = 70;
const MAX_STAGGER_STEPS = 6;

const pending = new Map<Element, Required<RevealOptions>>();
let observer: IntersectionObserver | undefined;

function play(element: HTMLElement, { delay, y }: Required<RevealOptions>, step: number) {
	element
		.animate(
			[
				{ opacity: 0, transform: `translateY(${y}px)` },
				{ opacity: 1, transform: 'none' }
			],
			{
				duration: DURATION,
				delay: delay + Math.min(step, MAX_STAGGER_STEPS) * STAGGER,
				easing: easing.outExpo,
				fill: 'both'
			}
		)
		.finished.then(() => (element.style.opacity = ''));
}

// One shared observer, so everything entering together arrives in one callback
function getObserver() {
	observer ??= new IntersectionObserver(
		(entries) => {
			const entering = entries
				.filter((entry) => entry.isIntersecting && pending.has(entry.target))
				.map((entry) => entry.target as HTMLElement)
				.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

			entering.forEach((element, step) => {
				play(element, pending.get(element)!, step);
				pending.delete(element);
				observer!.unobserve(element);
			});
		},
		{ rootMargin: '0px 0px -6% 0px' }
	);
	return observer;
}

// On the first page load, content already on screen was server-rendered and is visible —
// hiding it after hydration would flash. Later client-side navigations animate everything.
let hydrated = false;

/**
 * Fades and lifts an element in the first time it scrolls into view.
 * Usage: <h2 {@attach reveal()}> — siblings that appear together stagger automatically.
 */
export function reveal({ delay = 0, y = 20 }: RevealOptions = {}): Attachment<HTMLElement> {
	return (element) => {
		if (!hydrated) requestAnimationFrame(() => (hydrated = true));
		if (prefersReducedMotion.current) return;
		if (!hydrated && element.getBoundingClientRect().top < window.innerHeight) return;

		element.style.opacity = '0';
		pending.set(element, { delay, y });
		getObserver().observe(element);

		return () => {
			pending.delete(element);
			observer?.unobserve(element);
		};
	};
}
