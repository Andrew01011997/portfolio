import { cubicIn, expoOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

interface SequencedParams {
	direction: 'in' | 'out';
	delay?: number;
	duration?: number;
}

/**
 * Svelte runs outros with t going 1 → 0. This converts t into the local 0 → 1 progress
 * of the visible part, with the delay baked in so the start frame holds while waiting.
 */
function progress(
	t: number,
	direction: SequencedParams['direction'],
	delay: number,
	duration: number
) {
	const elapsed = (direction === 'in' ? t : 1 - t) * (delay + duration);
	return Math.min(Math.max((elapsed - delay) / duration, 0), 1);
}

/** Split-flap style flip: the letter tips away upward on exit and swings up from below on enter */
export function flip(
	_node: Element,
	{ direction, delay = 0, duration = 450 }: SequencedParams
): TransitionConfig {
	return {
		duration: delay + duration,
		css: (t) => {
			const p = progress(t, direction, delay, duration);
			// 0 = resting, 1 = fully turned away
			const away = direction === 'in' ? 1 - expoOut(p) : cubicIn(p);
			const sign = direction === 'in' ? -1 : 1;
			return `
				transform: perspective(600px) translateY(${sign * -0.3 * away}em) rotateX(${sign * 90 * away}deg);
				opacity: ${1 - away};
			`;
		}
	};
}

/** Plain fade that can wait for something else to leave first */
export function fadeAfter(
	_node: Element,
	{ direction, delay = 0, duration = 300 }: SequencedParams
): TransitionConfig {
	return {
		duration: delay + duration,
		css: (t) => {
			const p = progress(t, direction, delay, duration);
			return `opacity: ${direction === 'in' ? p : 1 - p}`;
		}
	};
}
