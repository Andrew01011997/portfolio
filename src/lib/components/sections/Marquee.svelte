<script lang="ts">
	import { marquee } from '#lib/data/experience.js';
</script>

<div class="overflow-hidden border-y border-line py-4">
	<div
		class="flex w-max animate-marquee font-mono text-label tracking-label text-accent uppercase hover:[animation-play-state:paused]"
	>
		{#each [0, 1] as copy (copy)}
			<ul class="flex shrink-0 gap-12 pr-12" aria-hidden={copy === 1}>
				{#each marquee as word (word)}
					<li class="flex items-center gap-12">
						<span>{word}</span>
						<span aria-hidden="true">✦</span>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>
