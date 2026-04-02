<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal } from '#lib/attachments/reveal.js';
	import { projects } from '#lib/data/projects.js';
	import { site } from '#lib/data/site.js';
	import { cardBackground } from '#lib/utils/index.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
	const next = $derived(
		projects[(projects.findIndex(({ slug }) => slug === project.slug) + 1) % projects.length]
	);
</script>

<svelte:head>
	<title>{project.title} — {site.name}</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<article>
	<header class="{cardBackground[project.color]} text-on-card">
		<div class="container-page pt-12 pb-16 md:pb-24">
			<a
				href={resolve('/work')}
				class="eyebrow text-on-card/70 transition-colors hover:text-on-card"
			>
				← All work
			</a>
			<p class="mt-16 animate-rise eyebrow text-on-card/70">{project.context}</p>
			<h1 class="mt-6 max-w-4xl animate-rise text-h2 text-on-card" style="animation-delay: 100ms">
				{project.title}
			</h1>
			<p
				class="mt-8 max-w-2xl animate-rise text-lead text-on-card/80"
				style="animation-delay: 200ms"
			>
				{project.summary}
			</p>
		</div>
	</header>

	<div class="container-page">
		<dl class="grid gap-8 border-b border-line py-10 sm:grid-cols-3">
			<div>
				<dt class="eyebrow">Role</dt>
				<dd class="mt-2 font-medium">{project.role}</dd>
			</div>
			<div>
				<dt class="eyebrow">Period</dt>
				<dd class="mt-2 font-medium">{project.period}</dd>
			</div>
			<div>
				<dt class="eyebrow">Stack</dt>
				<dd class="mt-2 text-small text-ink-muted">{project.stack.join(', ')}</dd>
			</div>
		</dl>

		<section class="grid gap-10 py-section md:grid-cols-2 md:gap-16">
			<h2 class="text-h4" {@attach reveal()}>The challenge</h2>
			<p class="text-lead text-ink-muted" {@attach reveal()}>{project.challenge}</p>
		</section>

		<section class="grid gap-10 border-t border-line py-section md:grid-cols-2 md:gap-16">
			<h2 class="text-h4" {@attach reveal()}>What I built</h2>
			<ul class="border-b border-line">
				{#each project.highlights as highlight (highlight)}
					<li class="flex gap-4 border-t border-line py-4" {@attach reveal({ y: 8 })}>
						<span class="text-accent">✦</span>
						<span>{highlight}</span>
					</li>
				{/each}
			</ul>
		</section>

		<section class="grid gap-px border-y border-line bg-line sm:grid-cols-3">
			{#each project.metrics as metric (metric.label)}
				<div class="bg-bg py-10 sm:px-8 sm:first:pl-0" {@attach reveal()}>
					<p class="font-display text-h3 font-medium">{metric.value}</p>
					<p class="mt-3 text-small text-ink-muted">{metric.label}</p>
				</div>
			{/each}
		</section>
	</div>

	<a
		href={resolve('/work/[slug]', { slug: next.slug })}
		class="group mt-section block border-t border-line"
	>
		<div class="container-page flex items-end justify-between gap-6 py-16">
			<div>
				<p class="eyebrow">Next project</p>
				<p class="mt-4 font-display text-h3 font-medium transition-colors group-hover:text-accent">
					{next.title}
				</p>
			</div>
			<span
				class="icon-button shrink-0 transition-transform duration-(--duration-base) ease-spring group-hover:rotate-45"
				aria-hidden="true">↗</span
			>
		</div>
	</a>
</article>
