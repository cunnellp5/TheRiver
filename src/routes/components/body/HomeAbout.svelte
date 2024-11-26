<script lang="ts">
	import Socials from '$lib/components/ui/Socials.svelte';
</script>

<section class="about app-layout">
	<h2 class="descriptionHeader gradientHeaders">Music Art Hair Nails</h2>
	<p>Let's <span class="lobster">flow</span> together.</p>
	<div class="socials">
		<Socials />
	</div>
</section>

<style>
	/* ELEMENTS */
	/* CLASSES */
	.lobster {
		color: var(--link);
		font-family: 'Lobster', cursive;
	}
	/* .beauty, */
	.about {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-5);
		margin-block: var(--size-content-1);
		& p {
			font-style: normal;
			font-weight: 400;
			font-size: var(--font-size-3);
			line-height: var(--font-lineheight-4);
			font-family: 'Ambit Light';
			text-align: center;
			text-transform: none;
		}
		/* & button {
			min-width: var(--size-content-1);
		} */
	}
	.socials {
		margin-block-start: var(--size-4);
	}
	/* IDS */

	@media (max-width: 768px) {
		/* .beauty, */
		.about {
			margin-block: var(--size-9);
		}
		.descriptionHeader {
			font-size: var(--size-8);
		}
	}
</style>
