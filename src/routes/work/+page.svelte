<script lang="ts">
	import { reveal } from '#lib/attachments/reveal.js';
	import { liveProjects } from '#lib/data/live-projects.js';
	import { projects } from '#lib/data/projects.js';
	import { site } from '#lib/data/site.js';
	import LiveProjectCard from '#lib/components/ui/LiveProjectCard.svelte';
	import ProjectGrid from '#lib/components/ui/ProjectGrid.svelte';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';
</script>

<svelte:head>
	<title>Work — {site.name}</title>
	<meta
		name="description"
		content="Case studies and live projects by {site.name}: enterprise platforms, banking, research tools, SaaS and websites."
	/>
</svelte:head>

<header class="container-page pt-16 pb-section md:pt-24">
	<p class="animate-rise eyebrow">Work · 2019 — 2026</p>
	<h1 class="mt-8 animate-rise text-h1" style="animation-delay: 100ms">
		Things I've<br /><span class="text-accent">shipped.</span>
	</h1>
	<p class="mt-10 max-w-xl animate-rise text-lead text-ink-muted" style="animation-delay: 200ms">
		Case studies from enterprise and product teams, plus smaller projects you can open in a browser
		right now.
	</p>
</header>

<section class="bg-surface section">
	<div class="container-page">
		<SectionHeading
			index={1}
			label="Case studies"
			aside="Products are under NDA, so the case studies focus on the problem and the approach."
		>
			Built to<br />scale.
		</SectionHeading>
		<div class="mt-16">
			<ProjectGrid {projects} />
		</div>
	</div>
</section>

<section class="section">
	<div class="container-page">
		<SectionHeading
			index={2}
			label="Live projects"
			aside="Smaller public products — frontend or full-stack, all running today."
		>
			Live on<br />the web.
		</SectionHeading>
		<ul class="mt-16 grid gap-4 md:grid-cols-2">
			{#each liveProjects as project (project.url)}
				<li {@attach reveal()}>
					<LiveProjectCard {project} />
				</li>
			{/each}
		</ul>
	</div>
</section>
