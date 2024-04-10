<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<main>
	<form method="post" use:enhance>
		<button> Logout </button>
	</form>
</main>

<style>
	main {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>
