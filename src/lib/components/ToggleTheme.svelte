<script lang="ts">
	import { fly } from 'svelte/transition';
	import Circle from 'lucide-svelte/icons/circle';
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<button on:click={toggleTheme} aria-label="Toggle Theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Circle fill="#E6E4C3" />
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Circle fill="#343332" />
		</div>
	{/if}
</button>

<style>
	button {
		box-shadow: none;
		border: none;
		background: none;
		padding: 0;
		overflow: hidden;
		font-weight: inherit;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
