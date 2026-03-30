<script lang="ts">
	import { resolve } from '$app/paths';
	import { nav, site } from '#lib/data/site.js';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="sticky top-0 z-50 border-b border-transparent bg-bg/80 backdrop-blur-md">
	<div class="container-page flex h-16 items-center justify-between gap-6">
		<a href={resolve('/')} class="flex items-center gap-2.5 text-small font-medium">
			<span class="grid size-6 place-items-center rounded-pill border border-ink">
				<span class="size-1.5 rounded-pill bg-ink"></span>
			</span>
			{site.name}
		</a>

		<nav class="flex items-center gap-6 sm:gap-8">
			<ul class="hidden items-center gap-8 sm:flex">
				{#each nav as link (link.href)}
					<li>
						<a
							href={link.href}
							class="text-small text-ink-muted transition-colors duration-(--duration-fast) hover:text-ink"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
			<ThemeToggle />
		</nav>
	</div>
</header>
