<script>
	let isOpen = true;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<a class="dropdown" on:click={toggle}>
	<div class="parent-menu">
		<div class="arrow">{isOpen ? '▼' : '►'}</div>
		<slot name="label"></slot>
	</div>
</a>

{#if isOpen}
	<div class="child-menu">
		<slot></slot>
	</div>
{/if}

<style>
	a {
		color: var(--gray-7);
		user-select: none;
	}
	.parent-menu {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* padding: var(--size-3); */
	}
	.child-menu {
		transition: transform 0.3s ease;
		margin-left: var(--size-3);
	}
	.arrow {
		/* margin-inline: var(--size-2); */
		font-size: var(--size-2);
	}
</style>
