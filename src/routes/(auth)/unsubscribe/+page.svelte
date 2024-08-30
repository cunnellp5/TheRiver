<!-- TODO USE THIS SOME HOW -->

<section>
	<h1>Unsubscribe</h1>

	<form method="POST">
		<div>
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" placeholder="your@email.com" required />
		</div>
		<button type="submit">Opt out</button>
	</form>
</section>

<!-- 
  todo 
  - add toast notification 
  - add one-time click if successful
  - add error handling
  - confirm opt out works
  - just check if user is logged in, in order to opt out, also verify if the logged in user is the same as the email being sent, then let this work
-->

<style>
	h1 {
		text-transform: uppercase;
	}
	form {
		display: flex;
		flex-direction: column;
	}
	input {
		margin: var(--size-2);
		padding: var(--size-2);
	}
	button {
		margin: var(--size-2);
		padding: var(--size-2);
	}
	section {
		display: flex;
		flex-direction: column;
		/* justify-content: left; */
		align-items: center;
		margin-block: var(--size-9);
	}
</style>
