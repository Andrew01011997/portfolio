<script lang="ts">
	import { resolve } from '$app/paths';
	import type { CardColor, Project } from '#lib/types.js';
	import { pad } from '#lib/utils/index.js';

	interface Props {
		project: Project;
		index: number;
		total: number;
	}

	let { project, index, total }: Props = $props();

	const background: Record<CardColor, string> = {
		lime: 'bg-lime',
		coral: 'bg-coral',
		sky: 'bg-sky'
	};
</script>

<a
	href={resolve('/work/[slug]', { slug: project.slug })}
	class="group relative flex h-full flex-col overflow-hidden rounded-card p-6 text-on-card md:p-10 {background[
		project.color
	]} {project.featured ? 'min-h-[30rem] md:min-h-[34rem]' : 'min-h-[26rem]'}"
>
	<!-- Decorative rings: drift and grow on hover -->
	<span
		aria-hidden="true"
		class="pointer-events-none absolute top-1/2 right-[8%] aspect-[1.4] -translate-y-1/2 -rotate-12 transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-110 group-hover:-rotate-3
			{project.featured ? 'w-[min(32rem,70%)]' : 'w-[min(18rem,60%)]'}"
	>
		{#each [0, 1, 2] as ring (ring)}
			<span class="absolute rounded-[50%] bg-on-card/5" style="inset: {ring * 9}%"></span>
		{/each}
	</span>

	<div class="relative flex items-start justify-between gap-6">
		<p class="eyebrow text-on-card/70">{project.tags.join(' · ')}</p>
		<span
			class="icon-button shrink-0 transition-transform duration-(--duration-base) ease-spring group-hover:rotate-45"
			aria-hidden="true">↗</span
		>
	</div>

	<p class="relative mt-10 eyebrow text-on-card/70">{pad(index + 1)} / {pad(total)}</p>

	<div class="relative mt-auto pt-16">
		<h3 class="{project.featured ? 'text-h3' : 'text-h4'} max-w-xl text-on-card">
			{project.title}
		</h3>
		<p class="mt-3 max-w-md text-small text-on-card/70">{project.summary}</p>
	</div>
</a>
