import { resolve } from '$app/paths';
import type { ExternalLink, NavLink } from '#lib/types.js';

export const site = {
	name: 'Andrii Strelchenko',
	shortName: 'Andrii',
	role: 'Senior Frontend Engineer',
	yearsOfExperience: 7,
	status: 'Senior JavaScript Engineer · Open to new roles',
	email: 'andrew01.01.1997@gmail.com',
	description:
		'Senior Frontend Engineer with 7 years in React and TypeScript — scalable frontend architecture, data-heavy interfaces and AI-powered product features.'
};

/**
 * Hero rotates through these: "I build {phrase} that feel simple."
 * Keep phrases plural so the sentence still reads, and no longer than "complex interfaces"
 * so the line doesn't wrap on desktop.
 */
export const heroPhrases = [
	{
		phrase: 'complex interfaces',
		lead: '7 years in React & TypeScript.',
		caption: 'Scalable frontend architecture for data-heavy enterprise products.'
	},
	{
		phrase: 'AI-powered tools',
		lead: 'LLM-powered search.',
		caption: 'Natural-language queries turned into structured filters across millions of records.'
	},
	{
		phrase: 'live dashboards',
		lead: 'Live data, done right.',
		caption: 'WebSockets, Server-Sent Events and polling for banking and enterprise monitoring.'
	},
	{
		phrase: 'design systems',
		lead: 'Component systems that scale.',
		caption: 'Reusable UI adopted across multiple products, backed by 90%+ test coverage.'
	},
	{
		phrase: 'microfrontends',
		lead: '4+ years of microfrontends.',
		caption: 'Module Federation and shared libraries for teams shipping into one product.'
	},
	{
		phrase: 'full-stack apps',
		lead: '2.5 years full-stack.',
		caption: 'Node.js, NestJS, PostgreSQL, Redis and BullMQ behind the React UI.'
	}
];

export const nav: NavLink[] = [
	{ label: 'About', href: resolve('/#about') },
	{ label: 'Work', href: resolve('/#work') },
	{ label: 'Contact', href: resolve('/#contact') }
];

export const socials: ExternalLink[] = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrii-strelchenko' }
];
