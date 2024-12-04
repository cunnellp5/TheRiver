<script lang="ts">
  interface Props {
    crumbs?: { name: string; link: string }[];
  }

  const { crumbs = [] }: Props = $props();
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

<style>
  span {
    font-size: var(--font-size-0);
  }
</style>
