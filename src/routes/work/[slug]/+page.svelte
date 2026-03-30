<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title}</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<article class="container-page section">
	<p class="eyebrow">{project.tags.join(' · ')}</p>
	<h1 class="mt-8 text-h2">{project.title}</h1>
	<p class="mt-6 max-w-2xl text-lead text-ink-muted">{project.summary}</p>
</article>
