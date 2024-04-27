<script lang="ts">
	export let data;
</script>

<section>
	<h1>Welcome {data.user.firstName} {data.user.lastName}</h1>

	<button class="primary">Book now!</button>

	{#if data.user}
		<div class="surface-4">
			<p>id: {data.user.id}</p>
			<p>isAdmin: {data.user.isAdmin}</p>
			<p>firstName: {data.user.firstName}</p>
			<p>lastName: {data.user.lastName}</p>
			<p>email: {data.user.email}</p>
		</div>
	{/if}
</section>

<style>
	section {
		height: 100vh;
	}
	h1 {
		margin-block: var(--size-5);
		padding-block: var(--size-5);
	}
	.surface-4 {
		margin-block: var(--size-3);
		box-shadow: var(--shadow-1);
		padding: var(--size-3);
	}
</style>
