<script lang="ts">
	import Sparkles from '$lib/components/atoms/Sparkles.svelte';
</script>

<a class="hairLink" href="https://lazwicky.glossgenius.com/services" target="_blank" rel="noopener">
	<button class="hair">
		Book Hair &bull;
		<span>Alexis</span>
	</button>
</a>
<a class="nailsLink" href="https://the-river-sings.square.site/" target="_blank" rel="noopener">
	<Sparkles>
		<button class="nails">Book Nails</button>
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
	button.hair {
		background-color: var(--jungle-2);
		color: var(--gray-7);
	}
	button.nails {
		background-color: var(--brown-8);
	}
	span {
		color: var(--brown-8);
	}
</style>
