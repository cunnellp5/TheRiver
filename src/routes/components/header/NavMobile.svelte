<script lang="ts">
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
	import Waves from 'lucide-svelte/icons/waves';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('openSheet');
	}
</script>

<a href="/" class="logo-link header__nav__a">
	<LogoR />
</a>
<button onclick={handleClick}>
	<Waves />
</button>

<style>
	/* ELEMENTS */
	a {
		transition: color 0.3s ease;
		height: 100%;
		color: var(--text-2);
		font-weight: var(--font-weight-5);
		font-size: var(--font-size-0);
		letter-spacing: var(--font-letterspacing-2);
		text-decoration: none;
		text-transform: uppercase;
	}

	/* CLASSES */
	a.logo-link {
		display: flex;
		width: var(--size-8);
	}
</style>
