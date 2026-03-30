import type { Project } from '#lib/types.js';

export const projects: Project[] = [
	{
		slug: 'ai-enterprise-search',
		title: 'AI-powered enterprise search',
		context: 'Enterprise workflow management platform',
		role: 'Senior Frontend Engineer',
		period: '2024 — 2026',
		summary:
			'Search across millions of records that understands plain language and turns it into precise, structured filters.',
		tags: ['React', 'TypeScript', 'AI search'],
		color: 'lime',
		featured: true,
		challenge:
			'A Jira-like B2B platform built on microservices, where every module had its own data, filters and permissions. Users needed one place to find anything — without learning a query language.',
		highlights: [
			'Global search across multiple modules and millions of records',
			'Natural-language queries translated into structured filters with an LLM',
			'Schema-driven filter framework generated from backend metadata',
			'Centralized permission model and digital approval workflow',
			'Live updates over WebSockets, Server-Sent Events and polling',
			'Microfrontend architecture with Module Federation'
		],
		stack: [
			'React',
			'TypeScript',
			'TanStack Query',
			'Material UI',
			'React Hook Form',
			'Module Federation'
		],
		metrics: [
			{ value: 'Millions', label: 'records searchable from one place' },
			{ value: '80%+', label: 'unit, integration & E2E coverage' },
			{ value: '15+', label: 'engineers across cross-functional teams' }
		]
	},
	{
		slug: 'banking-data-monitoring',
		title: 'Banking data monitoring',
		context: 'Banking platform modernization',
		role: 'Senior Software Engineer',
		period: '2023 — 2024',
		summary:
			'A legacy banking application rebuilt end to end — monitoring data aggregated from many sources, with reports that no longer block anyone.',
		tags: ['React', 'NestJS', 'PostgreSQL'],
		color: 'coral',
		challenge:
			'The existing platform was slow to change and slow to load. Data came from several sources, and heavy reports tied up the API while they were generated.',
		highlights: [
			'Reworked the legacy frontend with React and TypeScript',
			'Modular NestJS backend with REST APIs and TypeORM',
			'Asynchronous report generation with BullMQ and Redis queues',
			'Redis caching and PostgreSQL query optimization',
			'Architecture guidelines and reusable patterns adopted by the team'
		],
		stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Redis', 'BullMQ'],
		metrics: [
			{ value: 'Full-stack', label: 'frontend, API and database layers' },
			{ value: 'Async', label: 'report generation off the request path' }
		]
	},
	{
		slug: 'research-ui-library',
		title: 'Shared UI for research products',
		context: 'Scientific research management platform',
		role: 'Software Engineer',
		period: '2021 — 2023',
		summary:
			'Reusable abstractions and a component library that made data-heavy research workflows consistent across products.',
		tags: ['React', 'Design system', 'Testing'],
		color: 'sky',
		challenge:
			'Researchers manage large datasets and documentation across several products, each of which had grown its own UI patterns.',
		highlights: [
			'Shared UI component library adopted across multiple company products',
			'Reusable abstractions for complex, data-driven interfaces',
			'Performance work on large-data workflows',
			'Maintained more than 90% automated test coverage'
		],
		stack: ['React', 'TypeScript', 'Jest', 'React Testing Library', 'Cypress'],
		metrics: [
			{ value: '90%+', label: 'automated test coverage' },
			{ value: 'Multi', label: 'products built on one component library' }
		]
	}
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
