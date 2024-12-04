<script lang="ts">
  import styleToString from "$lib/utils/styleToString";

  interface Props {
    style?: any;
    as?: string;
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { style = {}, as = "h1", children, ...rest }: Props = $props();
</script>

<svelte:element this={as} style={styleToString({ ...style })} {...rest}>
  {@render children?.()}
</svelte:element>
