<script lang="ts">
	import { onMount } from 'svelte';

	type UserValue = string | boolean | number | Date | null;

	export let value: UserValue;
	export let key;

	let inputElement: HTMLInputElement;
	let optionText1: string;
	let optionText2: string;

	onMount(() => {
		if (key === 'isSubscribed') {
			if (value === true) {
				optionText1 = 'Remain Subscribed';
				optionText2 = 'Unsubscribe';
			} else {
				optionText1 = 'Subscribe';
				optionText2 = 'Remain Unsubscribed';
			}
		}
	});
</script>

{#if key === 'isSubscribed'}
	<div class="dropdownWrapper">
		<select name="value" bind:value>
			<option value={true}>{optionText1}</option>
			<option value={false}>{optionText2}</option>
		</select>
	</div>
{:else if key === 'email'}
	<input
		required
		type="email"
		name="value"
		bind:value
		bind:this={inputElement}
		class="fixed-width-input" />
{:else}
	<input
		required
		type="text"
		name="value"
		bind:value
		bind:this={inputElement}
		class="fixed-width-input" />
{/if}

<style>
	.dropdownWrapper {
		display: flex;
		align-items: center;
		gap: var(--size-3);
	}
	input {
		width: 100%;
	}
	select {
		min-width: var(--size-13);
	}
</style>
