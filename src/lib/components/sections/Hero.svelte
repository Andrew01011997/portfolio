<script lang="ts">
	import { prefersReducedMotion } from 'svelte/motion';
	import { heroPhrases, site } from '#lib/data/site.js';
	import { stagger } from '#lib/motion/index.js';
	import { fadeAfter, flip } from '#lib/motion/transitions.js';

	const INTERVAL = 4000;

	// Letters flip out one after another, then the next phrase flips in — never both at once
	const OUT = { duration: 300, stagger: 18 };
	const IN = { duration: 600, stagger: 22 };
	const longest = Math.max(...heroPhrases.map(({ phrase }) => phrase.length));
	const outWindow = OUT.duration + OUT.stagger * longest;

	/** Words keep letters together so the line only wraps between words */
	function split(phrase: string) {
		let i = 0;
		return phrase.split(' ').map((word) => [...word].map((char) => ({ char, i: i++ })));
	}

	let index = $state(0);
	let paused = $state(false);
	const current = $derived(heroPhrases[index]);

	// Rotate the highlighted phrase; hold still on hover and for reduced motion
	$effect(() => {
		if (paused || prefersReducedMotion.current) return;
		const id = setInterval(() => (index = (index + 1) % heroPhrases.length), INTERVAL);
		return () => clearInterval(id);
	});
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

	<div
		class="relative container-page flex flex-1 flex-col justify-center py-20"
		role="presentation"
		onpointerenter={() => (paused = true)}
		onpointerleave={() => (paused = false)}
	>
		<p class="flex animate-rise items-center gap-3 eyebrow">
			<span class="size-2 animate-pulse-dot rounded-full bg-success text-success"></span>
			{site.status}
		</p>

		<h1 class="mt-8 text-hero">
			<span class="block animate-rise" style="animation-delay: 150ms">I build</span>
			<span class="sr-only">{current.phrase}</span>
			<!-- Phrases share one grid cell, so the line keeps its place while letters flip -->
			<span
				class="grid animate-rise text-accent"
				style="animation-delay: {150 + stagger(1, 110)}ms"
				aria-hidden="true"
			>
				{#each [current] as item (item.phrase)}
					<span class="col-start-1 row-start-1 flex flex-wrap gap-x-[0.24em]">
						{#each split(item.phrase) as word, w (w)}
							<span class="flex">
								{#each word as { char, i } (i)}
									<span
										class="inline-block origin-bottom"
										in:flip|global={{
											direction: 'in',
											delay: outWindow + i * IN.stagger,
											duration: IN.duration
										}}
										out:flip|global={{
											direction: 'out',
											delay: i * OUT.stagger,
											duration: OUT.duration
										}}>{char}</span
									>
								{/each}
							</span>
						{/each}
					</span>
				{/each}
			</span>
			<span class="block animate-rise" style="animation-delay: {150 + stagger(2, 110)}ms">
				that feel simple.
			</span>
		</h1>

		<div
			class="mt-12 flex animate-rise items-end justify-between gap-8"
			style="animation-delay: 550ms"
		>
			<div class="grid min-h-[4.65em] max-w-sm text-small text-ink-muted">
				{#each [current] as item (item.phrase)}
					<p
						class="col-start-1 row-start-1"
						in:fadeAfter={{ direction: 'in', delay: outWindow, duration: IN.duration }}
						out:fadeAfter={{ direction: 'out', duration: OUT.duration }}
					>
						<strong>{item.lead}</strong>
						{item.caption}
					</p>
				{/each}
			</div>
			<a href="#about" class="icon-button shrink-0" aria-label="Scroll to about">↓</a>
		</div>
	</div>

	<p class="relative container-page pb-8 text-right eyebrow">Portfolio / 2026</p>
</section>
