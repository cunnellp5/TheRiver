<script lang="ts">
	export let treeData: never[] = [];
	export let item;
	export let i;
	export let summaryKeyup = (event: KeyboardEvent) => {
		if (
			document &&
			document.activeElement &&
			event.key === ' ' &&
			document.activeElement.tagName !== 'SUMMARY'
		) {
			event.preventDefault();
		}
	};
</script>

<details>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<summary class="flex" on:keyup={summaryKeyup} role="button" tabindex="0">
		<slot {item} list={treeData} id={i}>
			{item.name}
		</slot>
	</summary>

	{#if item.children}
		<div class="pl-8">
			<svelte:self treeData={item.children} let:item let:list={treeData} let:id={i}>
				<slot {item} list={treeData} id={i}>{item.name}</slot>
			</svelte:self>
		</div>
	{/if}
</details>
