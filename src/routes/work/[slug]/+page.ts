import { error } from '@sveltejs/kit';
import { getProject, projects } from '#lib/data/projects.js';
import type { EntryGenerator, PageLoad } from './$types';

// Tells the prerenderer which case-study pages exist
export const entries: EntryGenerator = () => projects.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const project = getProject(params.slug);
	if (!project) error(404, 'Project not found');
	return { project };
};
