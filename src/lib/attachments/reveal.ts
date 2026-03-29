import type { Attachment } from 'svelte/attachments';
import { prefersReducedMotion } from 'svelte/motion';
import { duration, easing } from '#lib/motion/index.js';

interface RevealOptions {
	delay?: number;
	/** Start offset in px */
	y?: number;
}

/**
 * Fades and lifts an element in the first time it scrolls into view.
 * Usage: <h2 {@attach reveal({ delay: 100 })}>
 */
export function reveal({ delay = 0, y = 24 }: RevealOptions = {}): Attachment<HTMLElement> {
	return (element) => {
		if (prefersReducedMotion.current) return;

		element.style.opacity = '0';

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				element
					.animate(
						[
							{ opacity: 0, transform: `translateY(${y}px)` },
							{ opacity: 1, transform: 'none' }
						],
						{ duration: duration.slower, delay, easing: easing.outExpo, fill: 'both' }
					)
					.finished.then(() => (element.style.opacity = ''));
			},
			{ rootMargin: '0px 0px -10% 0px' }
		);

		observer.observe(element);
		return () => observer.disconnect();
	};
}
