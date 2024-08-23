<script lang="ts">
	type UserValue = string | boolean | number | Date | null;

	export let value: UserValue;
	export let key;

	let inputElement: HTMLInputElement;
</script>

{#if key === 'isSubscribed'}
	<div class="dropdownWrapper">
		<select name="value" bind:value>
			<option value={true}>Yes, subscribe</option>
			<option value={false}>No, unsubscribe</option>
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
</style>
