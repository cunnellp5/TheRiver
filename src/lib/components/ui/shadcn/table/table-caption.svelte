<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, ...rest }: Props = $props();

</script>

<caption class={`${className}`} {...rest}>
  {@render children?.()}
</caption>

<style>
	.text-muted-foreground {
		color: var(--text-2);
	}

	.text-sm {
		font-size: var(--font-size-0);
	}

	.mt-4 {
		margin-block-start: var(--size-3);
	}
</style>
