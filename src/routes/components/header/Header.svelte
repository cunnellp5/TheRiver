<script lang="ts">
	import NavDesktop from './NavDesktop.svelte';
	import NavMobile from './NavMobile.svelte';
	import NavSheet from './NavSheet.svelte';

	export let isSignedIn = false;
	export let user;
	let showSheet = false;
</script>

<!--
 NavSheet shows the NavDesktop links in a modified modal for mobile devices
 NavMobile just shows the hamburger icon for mobile devices
-->
<NavSheet {user} {isSignedIn} show={showSheet} on:handleClose={() => (showSheet = false)} />

<nav class="nav-desktop">
	<NavDesktop {user} {isSignedIn}></NavDesktop>
</nav>

<nav class="nav-mobile">
	<NavMobile on:openSheet={() => (showSheet = true)}></NavMobile>
</nav>

<style>
	/* ELEMENTS */
	nav {
		align-items: center;
		padding-block: var(--size-2);
	}
	/* CLASSES */
	.nav-desktop {
		display: none;
	}
	.nav-mobile {
		display: flex;
		justify-content: space-between;
	}
	/* QUERIES */
	@media (min-width: 768px) {
		nav {
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
