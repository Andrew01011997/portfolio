import type { NavLink } from '#lib/types.js';

export const site = {
	name: 'Andrii',
	role: 'JavaScript developer',
	yearsOfExperience: 7,
	status: 'Independent by nature · Open to what’s next',
	email: 'hello@example.com',
	description:
		'JavaScript developer building expressive interfaces where the details move with purpose.'
};

export const nav: NavLink[] = [
	{ label: 'About', href: '/#about' },
	{ label: 'Work', href: '/#work' },
	{ label: 'Contact', href: '/#contact' }
];

export const socials: NavLink[] = [
	{ label: 'GitHub', href: 'https://github.com/' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/' }
];
