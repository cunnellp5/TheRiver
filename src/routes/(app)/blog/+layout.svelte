<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  const { children }: Props = $props();
</script>

{@render children?.()}
