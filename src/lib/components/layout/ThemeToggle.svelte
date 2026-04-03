<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '#lib/state/theme.svelte.js';

	onMount(() => theme.init());
</script>

<button
	class="chip cursor-pointer gap-2 transition-colors hover:text-ink"
	onclick={() => theme.toggle()}
	aria-label="Switch to {theme.current === 'dark' ? 'light' : 'dark'} theme"
>
	<!-- Label follows the theme attribute via CSS, so it is right before hydration too -->
	<span class="dark:hidden">Dark</span>
	<span class="hidden dark:inline">Light</span>
</button>
