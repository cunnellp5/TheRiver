<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, ...rest }: Props = $props();

</script>

<div class={className} {...rest}>
  {@render children?.()}
</div>

<style>
	div {
		box-shadow: var(--shadow-1);
		border: 1px solid var(--border);
		border-radius: var(--radius-2);
		background: var(--surface-2);
		color: var(--text-1);
	}

	.unset {
		box-shadow: unset;
		border: unset;
		border-radius: unset;
		background: unset;
		color: unset;
	}
	.option1 {
		box-shadow: unset;
		border: unset;
		border-radius: unset;
		background: var(--surface-4);
		height: 100%;
		color: var(--text-1);
	}
	.option2 {
		box-shadow: unset;
		border: unset;
		border-radius: unset;
		background: unset;
		height: 100%;
		color: var(--text-1);
	}
</style>
