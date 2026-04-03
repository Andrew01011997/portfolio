<script lang="ts">
	import './layout.css';
	import { asset } from '$app/paths';
	import favicon from '#lib/assets/favicon.svg';
	import geist from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url';
	import dmSans from '@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2?url';
	import Footer from '#lib/components/layout/Footer.svelte';
	import Header from '#lib/components/layout/Header.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<!-- Header mark as icons: .ico for legacy browsers, SVG that follows the browser theme,
	     raster tiles for home screens -->
	<link rel="icon" href={asset('favicon.ico')} sizes="32x32" />
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={asset('apple-touch-icon.png')} />
	<link rel="manifest" href={asset('site.webmanifest')} />
	<meta name="theme-color" content="#f0f0e8" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#141713" media="(prefers-color-scheme: dark)" />
	<!-- Fonts used above the fold start downloading with the HTML, not after CSS parsing -->
	<link rel="preload" href={geist} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={dmSans} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />
