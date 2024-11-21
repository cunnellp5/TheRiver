<script lang="ts">
	import { fly } from 'svelte/transition';
	import Circle from 'lucide-svelte/icons/circle';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;
	interface Props {
		class?: $$Props['class'];
	}

	let { class: className = '' }: Props = $props();
	
</script>

<button onclick={toggleTheme} aria-label="Toggle Theme" class={className}>
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
		flex-shrink: 0;
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
