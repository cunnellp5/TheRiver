<script lang="ts">
	import Sheet from '$lib/components/ui/Sheet.svelte';
	import { createEventDispatcher } from 'svelte';
	import NavDesktop from './NavDesktop.svelte';

	interface Props {
		show: boolean;
		user: any;
		isSignedIn: boolean;
	}

	let { show = $bindable(), user, isSignedIn }: Props = $props();

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('handleClose');
	}
</script>

<Sheet bind:showModal={show} overrideButtons={true} on:close={handleClose}>
	<!-- <h2 slot="header">The River</h2> -->
	<NavDesktop {user} {isSignedIn} showingSheet={true} />
	{#snippet buttons()}
		<div  class="buttons">
			<button onclick={handleClose}>Close</button>
		</div>
	{/snippet}
</Sheet>

<style>
	.buttons {
		display: flex;
		justify-content: center;
		/* margin-block: var(--size-8); */
	}
</style>
