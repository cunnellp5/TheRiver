<script lang="ts">
  import { createBubbler } from "svelte/legacy";

  const bubble = createBubbler();
  import type { HTMLTdAttributes } from "svelte/elements";

  type $$Props = HTMLTdAttributes;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, ...rest }: Props = $props();
</script>

<td
  class={`${className}`}
  {...rest}
  ondblclick={bubble("dblclick")}
  onclick={bubble("click")}
  onkeydown={bubble("keydown")}>
  {@render children?.()}
</td>

<style>
	/* ELEMENTS */
	td {
		background-color: var(--background-1);
		padding: var(--size-3);
		text-align: left;
		&:has(:global([role='checkbox'])) {
			padding-right: 0;
		}
	}
	/* CLASSES */
	.full-width {
		width: 100%;
	}
	.center {
		display: flex;
		justify-content: center;
	}
	.end {
		display: flex;
		justify-content: end;
	}
	/* Admin contact table */
	.fixed-width {
		width: var(--size-content-1);
	}
	.keyText {
		color: var(--text-2);
	}
</style>
