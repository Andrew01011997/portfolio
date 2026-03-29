/**
 * JS mirror of the motion tokens in layout.css — use for element.animate(), GSAP
 * or Svelte transitions so CSS and JS animations share the same timing.
 */

export const easing = {
	outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
	outQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
	inOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
	spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
} as const;

export const duration = {
	fast: 150,
	base: 300,
	slow: 600,
	slower: 1000
} as const;

/** Delay for the n-th item in a staggered group */
export function stagger(index: number, step = 80) {
	return index * step;
}
