<script>
	import { enhance } from '$app/forms';
	// import type { ActionData } from './$types';

	export let form;
</script>

<pre>video crud on homepage</pre>

{#if form}
	<pre>{JSON.stringify(form, null, 2)}</pre>
{/if}

<form method="POST" use:enhance>
	<button type="submit">fetch youtube</button>
</form>
