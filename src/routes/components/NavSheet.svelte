<script lang="ts">
	import Sheet from '$lib/components/ui/Sheet.svelte';
	import { createEventDispatcher } from 'svelte';
	import NavDesktop from './NavDesktop.svelte';

	export let show: boolean;
	export let user;
	export let isSignedIn: boolean;

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('handleClose');
	}

	$: console.log(show, 'wtfffff');
</script>

<Sheet bind:showModal={show} overrideButtons={true} on:close={handleClose}>
	<!-- <h2 slot="header">The River</h2> -->
	<NavDesktop {user} {isSignedIn} showingSheet={true} />
	<div slot="buttons" class="buttons">
		<button on:click={handleClose}>Close</button>
	</div>
</Sheet>

<style>
	.buttons {
		display: flex;
		justify-content: center;
		/* margin-block: var(--size-8); */
	}
</style>
