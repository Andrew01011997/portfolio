/** Zero-padded index: 1 → "01" (section numbers, "01 / 03" counters) */
export function pad(value: number, length = 2) {
	return String(value).padStart(length, '0');
}
