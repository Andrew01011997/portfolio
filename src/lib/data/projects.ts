import type { Project } from '#lib/types.js';

export const projects: Project[] = [
	{
		slug: 'project-one',
		title: 'Project title',
		summary:
			'A place for the idea behind the work: the interaction, the feeling, and what made it worth making.',
		tags: ['Motion direction', 'WebGL', 'JavaScript'],
		color: 'lime',
		year: 2026,
		featured: true
	},
	{
		slug: 'project-two',
		title: 'Project title',
		summary:
			'Replace this with a short story about a considered detail or a moment the interface comes alive.',
		tags: ['Creative development', 'GSAP', 'React'],
		color: 'coral',
		year: 2025
	},
	{
		slug: 'project-three',
		title: 'Project title',
		summary:
			'A small, specific description of the challenge, the approach, and the thing that stayed with you.',
		tags: ['Interaction design', 'Canvas', 'JavaScript'],
		color: 'sky',
		year: 2024
	}
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
