<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{#key $page.url.pathname.split('/')[1]}
	<div class="transition" in:fade>
		{@render children?.()}
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
