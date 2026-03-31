<script lang="ts">
	import { site } from '#lib/data/site.js';
	import About from '#lib/components/sections/About.svelte';
	import Contact from '#lib/components/sections/Contact.svelte';
	import Experience from '#lib/components/sections/Experience.svelte';
	import Hero from '#lib/components/sections/Hero.svelte';
	import Marquee from '#lib/components/sections/Marquee.svelte';
	import Work from '#lib/components/sections/Work.svelte';
</script>

<svelte:head>
	<title>{site.name} — {site.role}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<Hero />
<About />
<Experience />
<Work />
<Marquee />
<Contact />
