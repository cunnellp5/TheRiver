<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import NavDesktop from './NavDesktop.svelte';
	import NavMobile from './NavMobile.svelte';
	import NavSheet from './NavSheet.svelte';

	export let isSignedIn = false;
	export let user;
	let showAuthLinks = false;
	let visible = false;
	let showSheet = false;

	if (browser) {
		window.addEventListener('click', () => {
			if (showAuthLinks === true) {
				showAuthLinks = false;
			}
		});
	}

	// TODO only really want to animate this once, ever
	onMount(() => {
		visible = true;
	});
</script>

<NavSheet {user} {isSignedIn} show={showSheet} on:handleClose={() => (showSheet = false)} />

<!-- {#if visible} -->
<nav class="nav-desktop" in:fly={{ duration: 500, y: -400, delay: 500 }}>
	<NavDesktop {user} {isSignedIn}></NavDesktop>
</nav>

<nav class="nav-mobile">
	<NavMobile on:openSheet={() => (showSheet = true)}></NavMobile>
</nav>

<!-- {/if} -->

<style>
	/* ELEMENTS */
	nav {
		position: relative;
		align-items: center;
		padding-block: var(--size-2);
	}

	/* CLASSES */
	.nav-desktop {
		display: none;
		/* min-height: var(--size-9); */
	}

	.nav-mobile {
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.nav-desktop {
			display: flex;
		}

		.nav-mobile {
			display: none;
		}
	}
</style>
