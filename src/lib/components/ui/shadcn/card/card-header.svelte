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
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--size-6);
	}

	.noPadding {
		padding: unset;
	}

	@media (max-width: 768px) {
		.mobilePad {
			padding-inline: unset;
		}
	}
</style>
