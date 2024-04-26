<script lang="ts">
	export let tag: string;
	export let prefix: string | null = null;
</script>

{#if prefix}
	<span class="badge">{prefix} {tag}</span>
{:else}
	<span class="badge">
		{tag}
		<slot></slot>
	</span>
{/if}

<style>
	.badge {
		margin-inline-end: var(--size-1);
		border-radius: var(--radius-3);
		background: var(--border);
		padding-inline: var(--size-2);
		padding-block: var(--size-1);
		color: hsl(var(--gray-6-hsl));
		font-size: var(--font-size-0);
		letter-spacing: var(--font-letterspacing-1);
	}
</style>
