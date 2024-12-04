<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, ...rest }: Props = $props();

</script>

<tfoot class={`${className}`} {...rest}>
  {@render children?.()}
</tfoot>

<style>
	.bg-primary {
		background-color: var(--surface-4);
	}

	.text-primary-foreground {
		color: var(--text-1);
	}

	.font-medium {
		font-weight: 500;
	}
</style>
