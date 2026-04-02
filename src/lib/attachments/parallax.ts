import type { Attachment } from 'svelte/attachments';
import { prefersReducedMotion } from 'svelte/motion';

/**
 * Exposes the pointer position as --px / --py (-1…1 from the viewport centre) on the element,
 * for layers that drift with the mouse: transform: translate(calc(var(--px) * 20px), …).
 * Only on devices with a precise pointer; touch screens and reduced motion stay still.
 */
export const parallax: Attachment<HTMLElement> = (element) => {
	if (prefersReducedMotion.current || !matchMedia('(pointer: fine)').matches) return;

	let frame = 0;
	const onMove = (event: PointerEvent) => {
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			element.style.setProperty('--px', ((event.clientX / innerWidth) * 2 - 1).toFixed(3));
			element.style.setProperty('--py', ((event.clientY / innerHeight) * 2 - 1).toFixed(3));
		});
	};

	addEventListener('pointermove', onMove, { passive: true });
	return () => {
		cancelAnimationFrame(frame);
		removeEventListener('pointermove', onMove);
	};
};
