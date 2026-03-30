<script lang="ts">
	import { site } from '#lib/data/site.js';
</script>

<footer class="border-t border-line">
	<div class="container-page flex items-center justify-between gap-6 py-6 eyebrow">
		<span>{site.name} · {new Date().getFullYear()}</span>
		<span class="hidden sm:inline">Built with SvelteKit</span>
		<a href="#top" class="transition-colors hover:text-ink" aria-label="Back to top">↑ Top</a>
	</div>
</footer>
