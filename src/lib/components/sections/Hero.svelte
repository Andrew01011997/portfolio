<script lang="ts">
	import { site } from '#lib/data/site.js';
	import { stagger } from '#lib/motion/index.js';

	const lines = [
		{ text: 'I build', accent: false },
		{ text: 'complex interfaces', accent: true },
		{ text: 'that feel simple.', accent: false }
	];
</script>

<section class="relative flex min-h-[min(calc(100svh-4rem),64rem)] flex-col overflow-hidden">
	<!-- Orbit rings -->
	<div
		aria-hidden="true"
		class="pointer-events-none absolute top-[8%] -right-72 size-144 md:-right-40 lg:-right-16"
	>
		<span class="absolute inset-0 rounded-full border border-line"></span>
		<span class="absolute inset-[12%] rounded-full border border-line"></span>
		<span class="absolute inset-0 animate-orbit">
			<span
				class="absolute top-[14.6%] left-[14.6%] size-3 -translate-1/2 animate-pulse-dot rounded-full bg-accent text-accent"
			></span>
		</span>
	</div>

	<div class="relative container-page flex flex-1 flex-col justify-center py-20">
		<p class="flex animate-rise items-center gap-3 eyebrow">
			<span class="size-2 animate-pulse-dot rounded-full bg-success text-success"></span>
			{site.status}
		</p>

		<h1 class="mt-8 text-hero">
			{#each lines as line, i (line.text)}
				<span
					class="block animate-rise {line.accent ? 'text-accent' : ''}"
					style="animation-delay: {150 + stagger(i, 110)}ms"
				>
					{line.text}
				</span>
			{/each}
		</h1>

		<div
			class="mt-12 flex animate-rise items-end justify-between gap-8"
			style="animation-delay: 550ms"
		>
			<p class="max-w-sm text-small text-ink-muted">
				<strong>{site.yearsOfExperience} years in React & TypeScript.</strong>
				Scalable frontend architecture, data-heavy interfaces and AI-powered product features.
			</p>
			<a href="#about" class="icon-button shrink-0" aria-label="Scroll to about">↓</a>
		</div>
	</div>

	<p class="relative container-page pb-8 text-right eyebrow">Portfolio / 2026</p>
</section>
