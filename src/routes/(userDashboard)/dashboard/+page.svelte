<script lang="ts">
	export let data;
</script>

<section>
	<h1>Welcome</h1>

	<p>The only reason to be here is to schedule an appointment with Alexis</p>

	{#if data.user}
		<br />
		<h3>Userinfo</h3>
		<p>id: {data.user.id}</p>
		<p>isAdmin: {data.user.isAdmin}</p>
		<p>firstName: {data.user.firstName}</p>
		<p>lastName: {data.user.lastName}</p>
		<p>email: {data.user.email}</p>
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
</style>
