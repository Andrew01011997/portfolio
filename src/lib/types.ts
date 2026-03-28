export type CardColor = 'lime' | 'coral' | 'sky';

export interface Project {
	slug: string;
	title: string;
	summary: string;
	/** Shown as "Motion direction · WebGL · JavaScript" */
	tags: string[];
	color: CardColor;
	year: number;
	/** Featured projects get the full-width card on the home page */
	featured?: boolean;
}

export interface Experience {
	period: string;
	company: string;
	role: string;
	description: string;
}

export interface NavLink {
	label: string;
	href: string;
}
