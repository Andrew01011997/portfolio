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
	},
	{
		slug: 'streaming-payments',
		title: 'Checkout for 400K+ viewers',
		context: 'Video streaming platform',
		role: 'Software Engineer',
		period: '2020 — 2021',
		summary:
			'Payment and subscription flows for a streaming platform, where every checkout bug costs real money.',
		tags: ['Payments', 'Adyen', 'E2E testing'],
		color: 'lilac',
		challenge:
			'Checkout is where a streaming business earns its money — and where a bug hurts the most. With more than 400,000 customers, payment flows had to hold up in every edge case.',
		highlights: [
			'Payment and checkout functionality integrated with Adyen',
			'User-facing subscription workflows and account features',
			'Investigated production issues and hardened critical payment flows',
			'Maintained an automated E2E suite with more than 95% coverage'
		],
		stack: ['JavaScript', 'Adyen', 'E2E tests'],
		metrics: [
			{ value: '400K+', label: 'customers paying through the flows' },
			{ value: '95%+', label: 'end-to-end test coverage' }
		]
	},
	{
		slug: 'room-booking',
		title: 'Real-time room booking',
		context: 'Conference room booking platform',
		role: 'Software Engineer',
		period: '2019 — 2020',
		summary:
			'Interactive scheduling timelines where room availability updates live, so two people never grab the same slot.',
		tags: ['Scheduling', 'Real-time', 'Interactive UI'],
		color: 'sand',
		challenge:
			'Meeting rooms are a shared resource, and double bookings are the whole problem. The interface had to show what is free right now and stay accurate while everyone books at once.',
		highlights: [
			'Interactive scheduling timelines and booking workflows',
			'Real-time room availability updates',
			'Reservation management for everyday scheduling',
			'Frontend components integrated with backend APIs and application state'
		],
		stack: ['JavaScript', 'REST APIs', 'Real-time updates'],
		metrics: [
			{ value: 'Live', label: 'availability without a page refresh' },
			{ value: '2019', label: 'where the 7 years started' }
		]
	}
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
