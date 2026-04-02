<script lang="ts">
	import { reveal } from '#lib/attachments/reveal.js';
	import { skills } from '#lib/data/experience.js';
	import { site } from '#lib/data/site.js';
</script>

<section id="about" class="scroll-mt-16 bg-surface section">
	<div class="container-page">
		<p class="eyebrow"><span class="text-accent">01</span> &nbsp;/ A little about the practice</p>

		<div class="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
			<h2 class="text-h4" {@attach reveal()}>Architecture with<br />attention to detail.</h2>

			<div class="space-y-6 text-lead text-ink-muted" {@attach reveal()}>
				<p>
					I'm <strong>{site.shortName}</strong> — a frontend engineer with
					{site.yearsOfExperience} years of commercial experience, mostly in React and TypeScript, plus
					2.5 years of full-stack work with Node.js, NestJS and PostgreSQL.
				</p>
				<p>
					I like the hard parts: <strong
						>scalable frontend architecture, data-heavy interfaces</strong
					>
					and <strong>AI-powered features</strong> like natural-language search over millions of records.
				</p>
				<p>
					Good software is boring in the best way: reusable components, real-time data that just
					works, and test suites that let a team ship on Friday.
				</p>
			</div>
		</div>

		<ul class="mt-16 flex flex-wrap gap-2 border-t border-line pt-8">
			{#each skills as skill (skill)}
				<li class="chip" {@attach reveal({ y: 8 })}>{skill}</li>
			{/each}
		</ul>
	</div>
</section>
