<script lang="ts">
	import { reveal } from '#lib/attachments/reveal.js';
	import { projects } from '#lib/data/projects.js';
	import { stagger } from '#lib/motion/index.js';
	import ProjectCard from '#lib/components/ui/ProjectCard.svelte';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';
</script>

<section id="work" class="scroll-mt-16 bg-surface section">
	<div class="container-page">
		<SectionHeading
			index={3}
			label="Selected work"
			aside="Products are under NDA, so the case studies focus on the problem and the approach."
		>
			Built to<br />scale.
		</SectionHeading>

		<div class="mt-16 grid gap-4 md:grid-cols-2">
			{#each projects as project, i (project.slug)}
				<div
					class={project.featured ? 'md:col-span-2' : ''}
					{@attach reveal({ delay: stagger(i % 2) })}
				>
					<ProjectCard {project} index={i} total={projects.length} />
				</div>
			{/each}
		</div>
	</div>
</section>
