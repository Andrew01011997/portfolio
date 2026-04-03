<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '#lib/attachments/reveal.js';
	import { pad } from '#lib/utils/index.js';

	interface Props {
		index: number;
		label: string;
		/** Side note shown to the right of the title on wide screens */
		aside?: string;
		children: Snippet;
	}

	let { index, label, aside, children }: Props = $props();
</script>

<p class="eyebrow">
	<span class="text-accent">{pad(index)}</span> &nbsp;/ {label}
</p>

<div class="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
	<h2 class="text-h2 text-balance" {@attach reveal()}>
		{@render children()}
	</h2>
	{#if aside}
		<p class="max-w-56 text-small text-ink-muted md:mb-3 md:shrink-0">{aside}</p>
	{/if}
</div>
