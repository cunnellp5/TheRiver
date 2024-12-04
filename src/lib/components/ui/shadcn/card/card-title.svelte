<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { HeadingLevel } from "./index.js";

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    tag?: HeadingLevel;
  };

  interface Props {
    class?: $$Props["class"];
    tag?: $$Props["tag"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", tag = "h3", children, ...rest }: Props = $props();
</script>

<svelte:element
  this={tag}
  class={className}
  {...rest}>
  {@render children?.()}
</svelte:element>

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block: var(--size-6);
    /* max-width: var(--size-content-1); */
    background: var(--gradient-1) fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family:
      "Roboto",
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }

  .noPad {
    margin: unset;
    padding: unset;
  }

  .funText {
    background: unset;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;

    color: var(--text-1);
    font-style: normal;
    font-weight: var(--font-weight-4);
    font-size: var(--font-size-5);
    line-height: 1;
    font-family: "Atyp BL Display Medium";
    letter-spacing: 0em;
  }

  @media (max-width: 768px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: var(--font-size-4);
    }
    .funText {
      font-size: var(--font-size-6);
    }
  }
</style>
