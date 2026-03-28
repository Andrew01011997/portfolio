<script lang="ts">
	import ThemeToggle from '#lib/components/layout/ThemeToggle.svelte';

	const colors = [
		['bg', 'bg-bg'],
		['surface', 'bg-surface'],
		['ink', 'bg-ink'],
		['ink-muted', 'bg-ink-muted'],
		['ink-subtle', 'bg-ink-subtle'],
		['line', 'bg-line'],
		['accent', 'bg-accent'],
		['accent-soft', 'bg-accent-soft'],
		['success', 'bg-success'],
		['lime', 'bg-lime'],
		['coral', 'bg-coral'],
		['sky', 'bg-sky']
	];

	const types = [
		['hero', 'text-hero', 'feel alive.'],
		['h1', 'text-h1', 'Have a good one in mind?'],
		['h2', 'text-h2', 'In good company.'],
		['h3', 'text-h3', 'Project title'],
		['h4', 'text-h4', 'Code with a sense of timing.']
	];
</script>

<svelte:head>
	<title>Design system</title>
</svelte:head>

<header class="container-page flex items-center justify-between py-6">
	<span class="text-small font-medium">Design system</span>
	<ThemeToggle />
</header>

<section class="container-page section">
	<p class="mb-10 eyebrow"><span class="text-accent">01</span> &nbsp;/ Colors</p>
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
		{#each colors as [name, cls] (name)}
			<div>
				<div class="h-20 border border-line {cls}"></div>
				<p class="mt-2 eyebrow">{name}</p>
			</div>
		{/each}
	</div>
</section>

<section class="bg-surface section">
	<div class="container-page space-y-12">
		<p class="eyebrow"><span class="text-accent">02</span> &nbsp;/ Typography</p>
		{#each types as [name, cls, sample] (name)}
			<div class="border-t border-line pt-6">
				<p class="mb-4 eyebrow">{name}</p>
				<p class="font-display font-medium {cls}">{sample}</p>
			</div>
		{/each}
		<div class="grid gap-8 border-t border-line pt-6 md:grid-cols-3">
			<div>
				<p class="mb-4 eyebrow">lead</p>
				<p class="text-lead text-ink-muted">
					I'm <strong>Andrii</strong> — a JavaScript developer making the web feel more considered.
				</p>
			</div>
			<div>
				<p class="mb-4 eyebrow">small</p>
				<p class="text-small text-ink-muted">
					A sentence about the work, the team, or the problems you solve.
				</p>
			</div>
			<div>
				<p class="mb-4 eyebrow">label / chips</p>
				<div class="flex flex-wrap gap-2">
					<span class="chip">JavaScript</span>
					<span class="chip">Animation</span>
					<span class="chip">Motion systems</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="container-page section">
	<p class="mb-10 eyebrow"><span class="text-accent">03</span> &nbsp;/ Cards & motion</p>
	<div class="grid gap-4 md:grid-cols-2">
		<article class="relative rounded-card bg-coral p-8 text-on-card md:p-10">
			<p class="eyebrow text-on-card/70">Creative development · GSAP · React</p>
			<a href="#top" class="absolute top-6 right-6 icon-button" aria-label="Open project">↗</a>
			<h3 class="mt-24 text-h4 text-on-card">Project title</h3>
			<p class="mt-2 max-w-sm text-small text-on-card/70">A moment the interface comes alive.</p>
		</article>
		<article class="relative rounded-card bg-sky p-8 text-on-card md:p-10">
			<p class="eyebrow text-on-card/70">Interaction design · Canvas</p>
			<span
				class="absolute top-6 right-6 size-24 animate-orbit rounded-full border border-on-card/20"
			>
				<span class="absolute -top-1.5 left-1/2 size-3 rounded-full bg-accent"></span>
			</span>
			<h3 class="mt-24 text-h4 text-on-card">Project title</h3>
			<p class="mt-2 flex items-center gap-2 eyebrow text-on-card/70">
				<span class="size-2 animate-pulse-dot rounded-full bg-success text-success"></span>
				Open to what's next
			</p>
		</article>
	</div>
	<div class="mt-12 overflow-hidden border-y border-line py-4">
		<div
			class="flex w-max animate-marquee gap-12 font-mono text-label tracking-label text-accent uppercase"
		>
			{#each [0, 1] as copy (copy)}
				{#each ['JavaScript', 'Animation with intent', 'Interaction that feels right'] as word (word)}
					<span aria-hidden={copy === 1}>✦ &nbsp;{word}</span>
				{/each}
			{/each}
		</div>
	</div>
</section>
