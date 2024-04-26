<script lang="ts">
	export let data;

	const { services } = data;
</script>

<h2>Services</h2>

{#each services as service}
	<div>
		<h4>{service.name}</h4>
		<p>{service.availability}</p>
		<p>{service.category}</p>
		<p>{service.description}</p>
		<p>{service.duration} min</p>
		<p>${service.price}</p>
		<p>{service.slug}</p>
	</div>
{/each}

<style>
	div {
		margin-block: var(--size-4);
		border: 1px solid var(--color-gray-1);
		padding: var(--size-4);
	}
</style>
