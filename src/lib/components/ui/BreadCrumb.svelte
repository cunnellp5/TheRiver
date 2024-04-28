<script lang="ts">
	export let crumbs: { name: string; link: string }[] = [];
</script>

{#each crumbs as { name, link }, index (link)}
	<span>
		{#if index < crumbs.length - 1}
			<a href={link}>{name}</a>
		{:else}
			{name}
		{/if}
		{#if index < crumbs.length - 1}
			&rsaquo;
		{/if}
	</span>
{/each}
