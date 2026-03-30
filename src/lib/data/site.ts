import { resolve } from '$app/paths';
import type { ExternalLink, NavLink } from '#lib/types.js';

export const site = {
	name: 'Andrii Strelchenko',
	shortName: 'Andrii',
	role: 'Senior Frontend Engineer',
	yearsOfExperience: 7,
	status: 'Senior Frontend Engineer · Open to new roles',
	email: 'andrew01.01.1997@gmail.com',
	description:
		'Senior Frontend Engineer with 7 years in React and TypeScript — scalable frontend architecture, data-heavy interfaces and AI-powered product features.'
};

export const nav: NavLink[] = [
	{ label: 'About', href: resolve('/#about') },
	{ label: 'Work', href: resolve('/#work') },
	{ label: 'Contact', href: resolve('/#contact') }
];

export const socials: ExternalLink[] = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrii-strelchenko' }
];
