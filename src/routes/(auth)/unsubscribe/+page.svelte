<section class="app-layout">
	<section class="breaker">
		<h1>Un&#8203;sub&#8203;scribe</h1>
		<p>Enter your email to unsubscribe from The River's newsletter</p>
	</section>

	<form method="POST" class="column">
		<div class="column">
			<label for="email">Email</label>
			<input type="email" name="email" id="email" placeholder="Enter email" required />
		</div>
		<button class="delete-button" type="submit">Un&#8203;sub&#8203;scribe</button>
	</form>
</section>

<style>
	h1 {
		margin-block-end: var(--size-2);
		font-size: var(--font-size-7);
		text-transform: uppercase;
	}
	p {
		color: var(--text-2);
	}
	form {
		gap: var(--size-4);
		/* min-width: var(--size-content-1); */
	}
	label {
		margin-bottom: var(--size-1);
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
	section {
		margin-block: var(--size-9);
		max-width: var(--size-content-2);
	}
	.column {
		display: flex;
		flex-direction: column;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: var(--font-size-5);
		}
		p {
			font-size: var(--font-size-1);
		}
	}
</style>
