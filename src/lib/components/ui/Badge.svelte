<script lang="ts">
	export let tag: string;
	export let prefix: string | null = null;
</script>

{#if prefix}
	<span class="badge">{tag}</span>
{:else}
	<span class="badge">
		{tag}
		<slot></slot>
	</span>
{/if}

<style>
	.badge {
		border-radius: var(--radius-3);
		background-color: hsl(var(--teal-2-hsl) / 80%);
		padding-inline: var(--size-3);
		padding-block: var(--size-0);
		color: var(--teal-10);
		font-weight: var(--font-weight-5);
		font-size: var(--font-size-1);
		text-shadow: none;
		text-transform: capitalize;
		white-space: nowrap;
	}
</style>
