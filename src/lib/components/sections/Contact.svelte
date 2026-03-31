<script lang="ts">
	import { reveal } from '#lib/attachments/reveal.js';
	import { site, socials } from '#lib/data/site.js';
</script>

<section id="contact" class="scroll-mt-16 section">
	<div class="container-page">
		<p class="eyebrow"><span class="text-accent">04</span> &nbsp;/ The next good thing</p>

		<h2 class="mt-12 text-h1" {@attach reveal()}>
			Have a good<br />one in <span class="text-accent">mind?</span>
		</h2>

		<div
			class="mt-16 flex flex-col justify-between gap-8 border-t border-line pt-8 md:flex-row md:items-end"
		>
			<p class="max-w-sm text-small text-ink-muted">
				I'm open to senior frontend and full-stack roles — teams building complex products where
				architecture, quality and the user's time all matter.
			</p>

			<div class="flex flex-col items-start gap-3 md:items-end">
				<a
					href="mailto:{site.email}"
					class="group flex items-center gap-2 text-body font-medium transition-colors hover:text-accent"
				>
					{site.email}
					<span
						class="transition-transform duration-(--duration-base) ease-spring group-hover:translate-x-1"
						>→</span
					>
				</a>
				{#each socials as social (social.href)}
					<a
						href={social.href}
						target="_blank"
						rel="external noreferrer"
						class="eyebrow transition-colors hover:text-ink"
					>
						{social.label} ↗
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
