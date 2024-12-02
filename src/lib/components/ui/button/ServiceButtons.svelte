<script lang="ts">
	import Sparkles from '$lib/components/atoms/Sparkles.svelte';
</script>

<a class="nailsLink" href="https://the-river-sings.square.site/" target="_blank" rel="noopener">
	<Sparkles>
		<button class="nails">Book Now</button>
	</Sparkles>
</a>

<style>
	/* https://ryanmulligan.dev/blog/css-property-new-style/ */
	button {
		animation: spin 2.5s infinite linear paused;
		box-shadow:
			var(--shadow-2),
			0 0px var(--surface-3),
			0 0 0 var(--_highlight-size) var(--_highlight);
		border: 1px solid transparent;
		background-color: unset;
		background:
			linear-gradient(to bottom, #222, #111) padding-box,
			conic-gradient(from var(--bg-angle) in oklch longer hue, oklch(0.85 0.37 0) 0 0) border-box; /* extends to outer border edges */
		min-width: var(--size-content-1);
		color: var(--stone-1);
		font-weight: var(--font-weight-6);
		&:hover {
			animation-play-state: running;
		}
	}

	button.nails {
		background-color: var(--yellow-6);
	}

	@property --bg-angle {
		inherits: false;
		initial-value: 0deg;
		syntax: '<angle>';
	}

	@keyframes spin {
		to {
			--bg-angle: 360deg;
		}
	}
	/* span {
		color: var(--cyan-12);
	} */
</style>
