<script lang="ts">
	import type { LiveProject } from '#lib/types.js';

	let { project }: { project: LiveProject } = $props();

	const domain = $derived(new URL(project.url).hostname.replace(/^www\./, ''));
</script>

<a
	href={project.url}
	target="_blank"
	rel="external noopener noreferrer"
	class="group flex h-full flex-col border border-line bg-bg transition-colors duration-(--duration-base) hover:border-ink/40"
>
	<div class="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
		<img
			src={project.image}
			alt="{project.title} home page"
			loading="lazy"
			decoding="async"
			class="size-full object-cover object-top transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-[1.03]"
		/>
		<span
			class="absolute top-4 right-4 icon-button bg-bg/90 text-ink backdrop-blur-sm transition-transform duration-(--duration-base) ease-spring group-hover:rotate-45"
			aria-hidden="true">↗</span
		>
	</div>

	<div class="flex flex-1 flex-col p-6 md:p-8">
		<p class="eyebrow">
			<span class="text-accent">{project.scope}</span> · {project.kind}
		</p>
		<h3 class="mt-4 text-h4">{project.title}</h3>
		<p class="mt-3 text-small text-ink-muted">{project.description}</p>
		<p class="mt-auto pt-6 eyebrow transition-colors group-hover:text-ink">{domain}</p>
	</div>
</a>
