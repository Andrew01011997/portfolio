<script lang="ts">
	import { reveal } from '#lib/attachments/reveal.js';
	import type { Project } from '#lib/types.js';
	import ProjectCard from './ProjectCard.svelte';

	let { projects }: { projects: Project[] } = $props();
</script>

<!-- Bento: featured projects span both columns, the rest pair up -->
<div class="grid gap-4 md:grid-cols-2">
	{#each projects as project, i (project.slug)}
		<div class={project.featured ? 'md:col-span-2' : ''} {@attach reveal()}>
			<ProjectCard {project} index={i} total={projects.length} />
		</div>
	{/each}
</div>
