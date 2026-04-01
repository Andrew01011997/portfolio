import anomi from '#lib/assets/projects/anomi.webp';
import parmaster from '#lib/assets/projects/parmaster.webp';
import siteAnalyzer from '#lib/assets/projects/site-analyzer.webp';
import webMriya from '#lib/assets/projects/web-mriya.webp';
import type { LiveProject } from '#lib/types.js';

export const liveProjects: LiveProject[] = [
	{
		title: 'Site Analyzer',
		kind: 'Website audit SaaS',
		url: 'https://analytics.web-mriya.com/',
		scope: 'Full-stack',
		description:
			'Paste a URL, get a technical report on SEO, Core Web Vitals, structured data and readiness for AI search — with accounts, plans and scheduled rescans.',
		image: siteAnalyzer
	},
	{
		title: 'Anomi',
		kind: 'Mental health platform',
		url: 'https://www.anomi.app/',
		scope: 'Full-stack',
		description:
			'Video consultations with certified psychologists and mentors: booking, reminders, verified specialists and free sessions for veterans.',
		image: anomi
	},
	{
		title: 'WebMriya',
		kind: 'Company website',
		url: 'https://web-mriya.com',
		scope: 'Frontend',
		description:
			'Website for a team of senior React & TypeScript engineers — services, projects, insights and a light / dark theme.',
		image: webMriya
	},
	{
		title: 'Parmaster',
		kind: 'Product catalog',
		url: 'https://parmaster.pro/',
		scope: 'Frontend',
		description:
			'E-commerce-style catalog for a Kyiv sauna builder: heaters, doors, cladding and accessories to browse online, with orders placed through sales.',
		image: parmaster
	}
];
