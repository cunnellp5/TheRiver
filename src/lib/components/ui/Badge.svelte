<script lang="ts">
	export let tag: string;
	export let prefix: string | null = null;
</script>

{#if prefix}
	<span class="badge surface-3">{prefix} {tag}</span>
{:else}
	<span class="badge surface-3">
		{tag}
		<slot></slot>
	</span>
{/if}

<style>
	.badge {
		margin-inline-end: var(--size-1);
		border-radius: var(--radius-2);
		padding-inline: var(--size-2);
		padding-block: var(--size-1);
		color: hsl(var(--gray-6-hsl));
		font-size: var(--font-size-0);
		letter-spacing: var(--font-letterspacing-1);
		/* background: var(--border); */
		text-shadow: none;
	}
</style>
