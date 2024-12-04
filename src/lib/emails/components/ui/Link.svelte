<script lang="ts">
  import styleToString from "$lib/utils/styleToString";

  interface Props {
    style?: any;
    target?: string;
    href?: string;
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const {
    style = {},
    target = "_blank",
    href = "",
    children,
    ...rest
  }: Props = $props();

  const styleDefault = {
    color: "#067df7",
    textDecoration: "none",
    ...style,
  };
</script>

<a {...rest} {href} {target} style={styleToString(styleDefault)}>
  {@render children?.()}
</a>
