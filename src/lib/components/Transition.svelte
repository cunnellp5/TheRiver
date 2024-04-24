<script lang="ts">
	import { fade } from 'svelte/transition';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
</script>

{#key $page.url.pathname}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
