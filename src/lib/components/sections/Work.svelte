<script lang="ts">
	import { resolve } from '$app/paths';
	import { projects } from '#lib/data/projects.js';
	import ProjectGrid from '#lib/components/ui/ProjectGrid.svelte';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';

	const HOME_LIMIT = 3;
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

		<div class="mt-16">
			<ProjectGrid projects={projects.slice(0, HOME_LIMIT)} />
		</div>

		<a
			href={resolve('/work')}
			class="group mt-10 flex items-center justify-between gap-6 border-y border-line py-6"
		>
			<span class="font-display text-h4 font-medium transition-colors group-hover:text-accent">
				All work
			</span>
			<span class="flex items-center gap-4">
				<span class="hidden eyebrow sm:inline">
					{projects.length} case studies · live projects
				</span>
				<span
					class="icon-button transition-transform duration-(--duration-base) ease-spring group-hover:translate-x-1"
					aria-hidden="true">→</span
				>
			</span>
		</a>
	</div>
</section>
