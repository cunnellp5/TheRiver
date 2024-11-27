<script lang="ts">
	import Sparkles from '$lib/components/atoms/Sparkles.svelte';
</script>

<a class="nailsLink" href="https://the-river-sings.square.site/" target="_blank" rel="noopener">
	<Sparkles>
		<button class="nails">Book Now</button>
	</Sparkles>
</a>

<style>
	button {
		box-shadow:
			var(--shadow-2),
			0 0px var(--surface-3),
			0 0 0 var(--_highlight-size) var(--_highlight);
		background-color: unset;
		min-width: var(--size-content-1);
		color: var(--gray-3);
		font-weight: var(--font-weight-6);
	}
	/* button.hair {
		background-color: var(--blue-1);
		color: var(--gray-7);
	} */
	button.nails {
		background-color: var(--cyan-10);
	}
	/* span {
		color: var(--cyan-12);
	} */
</style>
