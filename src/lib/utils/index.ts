import type { CardColor } from '#lib/types.js';

/** Full class names so Tailwind can find them — never build these with string templates */
export const cardBackground: Record<CardColor, string> = {
	lime: 'bg-lime',
	coral: 'bg-coral',
	sky: 'bg-sky',
	lilac: 'bg-lilac',
	sand: 'bg-sand'
};

/** Zero-padded index: 1 → "01" (section numbers, "01 / 03" counters) */
export function pad(value: number, length = 2) {
	return String(value).padStart(length, '0');
}
