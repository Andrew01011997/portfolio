<script lang="ts">
	import { reveal } from '#lib/attachments/reveal.js';
	import { experience } from '#lib/data/experience.js';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';
</script>

<section class="section">
	<div class="container-page">
		<SectionHeading
			index={2}
			label="Where the work happens"
			aside="Enterprise platforms, banking, research and streaming — 2019 to now."
		>
			In good<br />company.
		</SectionHeading>

		<ol class="mt-16 border-b border-line">
			{#each experience as job (job.period)}
				<li
					class="grid gap-2 border-t border-line py-6 md:grid-cols-[10rem_1fr_1.4fr] md:gap-8"
					{@attach reveal({ y: 12 })}
				>
					<span class="pt-1 eyebrow">{job.period}</span>
					<p class="font-medium">
						{job.company} <span class="text-ink-subtle">/</span>
						<span class="text-ink-muted">{job.role}</span>
					</p>
					<p class="text-small text-ink-muted">{job.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
