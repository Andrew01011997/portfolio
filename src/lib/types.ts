import type { ResolvedPathname } from '$app/types';

export type CardColor = 'lime' | 'coral' | 'sky' | 'lilac' | 'sand';

export interface Metric {
	value: string;
	label: string;
}

export interface Project {
	slug: string;
	title: string;
	/** What the product is — shown above the case study title */
	context: string;
	role: string;
	period: string;
	summary: string;
	/** Shown as "React · TypeScript · AI search" */
	tags: string[];
	color: CardColor;
	/** Featured projects get the full-width card on the home page */
	featured?: boolean;
	challenge: string;
	highlights: string[];
	stack: string[];
	metrics: Metric[];
}

/** Smaller public project with a live URL — no case study page */
export interface LiveProject {
	title: string;
	/** What it is, in a few words: "Website audit SaaS" */
	kind: string;
	url: string;
	scope: 'Frontend' | 'Full-stack';
	description: string;
	/** Screenshot imported from #lib/assets/projects */
	image: string;
}

export interface Experience {
	period: string;
	company: string;
	role: string;
	description: string;
}

/** Internal link — build href with resolve() from $app/paths */
export interface NavLink {
	label: string;
	href: ResolvedPathname;
}

export interface ExternalLink {
	label: string;
	href: string;
}
