<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '#lib/state/theme.svelte.js';

	onMount(() => theme.init());
</script>

<button
	class="chip cursor-pointer gap-2 transition-colors hover:text-ink"
	onclick={() => theme.toggle()}
>
	{theme.current === 'dark' ? 'Light' : 'Dark'}
</button>
