<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import geist from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url';
	import dmSans from '@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2?url';
	import Footer from '#lib/components/layout/Footer.svelte';
	import Header from '#lib/components/layout/Header.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- Fonts used above the fold start downloading with the HTML, not after CSS parsing -->
	<link rel="preload" href={geist} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={dmSans} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />
