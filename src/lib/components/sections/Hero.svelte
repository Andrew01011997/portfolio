<script lang="ts">
	import { prefersReducedMotion } from 'svelte/motion';
	import { parallax } from '#lib/attachments/parallax.js';
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

	// Stack labels that drift around the outer ring on very wide screens
	const orbitLabels = ['React', 'TypeScript', 'Svelte', 'Node.js', 'NestJS', 'LLMs'];
</script>

<section class="relative flex min-h-[min(calc(100svh-4rem),80rem)] flex-col overflow-hidden">
	<div
		class="@container relative isolate container-page flex flex-1 flex-col justify-center py-20"
		role="presentation"
		onpointerenter={() => (paused = true)}
		onpointerleave={() => (paused = false)}
	>
		<!-- Orbit rings: anchored to the content column, so they stay next to the heading on any width -->
		<div
			aria-hidden="true"
			class="pointer-events-none absolute top-1/2 right-[-8%] -z-10 aspect-square w-[max(22rem,44cqi)] max-w-[56rem] -translate-y-1/2 3xl:right-[3%]"
			{@attach parallax}
		>
			<!-- Each layer drifts a different amount with the pointer for depth -->
			<div
				class="absolute inset-0 transition-transform duration-[1.2s] ease-out-expo"
				style="transform: translate(calc(var(--px, 0) * -14px), calc(var(--py, 0) * -14px))"
			>
				<span class="absolute inset-0 rounded-full border border-line"></span>
				<span class="absolute inset-0 animate-orbit">
					<span
						class="absolute top-[14.6%] left-[14.6%] size-3 -translate-1/2 animate-pulse-dot rounded-full bg-accent text-accent"
					></span>
				</span>
			</div>

			<div
				class="absolute inset-[12%] transition-transform duration-[1.2s] ease-out-expo"
				style="transform: translate(calc(var(--px, 0) * -28px), calc(var(--py, 0) * -28px))"
			>
				<span class="absolute inset-0 rounded-full border border-line"></span>
				<span class="absolute inset-0 hidden animate-orbit-reverse 3xl:block">
					<span class="absolute top-full left-1/2 size-2 -translate-1/2 rounded-full bg-ink-subtle"
					></span>
				</span>
			</div>

			<!-- Wide screens only: dashed outer ring with the stack slowly circling on it.
			     The mask fades its left side, where it would run behind the heading; the layer is
			     larger than the ring (-24% vs -14%) so labels sticking out past the ring aren't clipped. -->
			<div
				class="absolute inset-[-24%] hidden mask-l-from-50% mask-l-to-85% transition-transform duration-[1.2s] ease-out-expo 3xl:block"
				style="transform: translate(calc(var(--px, 0) * -6px), calc(var(--py, 0) * -6px))"
			>
				<!-- 10% of the 148% layer brings the ring back to -14% of the orbit -->
				<span
					class="absolute inset-[6.76%] animate-orbit-reverse rounded-full border border-dashed border-line"
				></span>
				<span class="absolute inset-[6.76%] animate-orbit-slow">
					{#each orbitLabels as label, i (label)}
						<span
							class="absolute inset-0"
							style="transform: rotate({(360 / orbitLabels.length) * i}deg)"
						>
							<span
								class="absolute top-1/2 right-0"
								style="transform: translate(50%, -50%) rotate({(-360 / orbitLabels.length) * i}deg)"
							>
								<span class="block animate-orbit-reverse">
									<span class="chip bg-bg">{label}</span>
								</span>
							</span>
						</span>
					{/each}
				</span>
			</div>
		</div>

		<p class="flex animate-rise items-center gap-3 eyebrow">
			<span class="size-2 animate-pulse-dot rounded-full bg-success text-success"></span>
			{site.status}
		</p>

		<h1 class="mt-8 text-hero">
			<span class="block animate-rise" style="animation-delay: 80ms">I build</span>
			<span class="sr-only">{current.phrase}</span>
			<!-- Phrases share one grid cell, so the line keeps its place while letters flip -->
			<span
				class="grid animate-rise text-accent"
				style="animation-delay: {80 + stagger(1, 90)}ms"
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
			<span class="block animate-rise" style="animation-delay: {80 + stagger(2, 90)}ms">
				that feel simple.
			</span>
		</h1>

		<div
			class="mt-12 flex animate-rise items-end justify-between gap-8"
			style="animation-delay: 380ms"
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
