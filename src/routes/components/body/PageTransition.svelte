<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{#key $page.url.pathname.split('/')[1]}
	<div class="transition">
		{@render children?.()}
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
