<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import market from '$lib/data/json/market.json';
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Market</Card.Title>
			<Card.Description>place holder for your e-commerce store</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>
				<span> Link: </span>
				{market.url}
			</p>
			<p>
				<span> Display: </span>
				{market.text}
			</p>
		</Card.Content>
	</Card.Root>
</div>

<!-- TODO make sure its required and add a warning-->
<div class="formWrapper">
	<form method="POST">
		<div>
			<div class="inputWrapper">
				<label for="inputUrl">Link:</label>
				<input
					required
					type="text"
					name="inputUrl"
					placeholder="https://put-link-here.com"
					value={market.url} />
			</div>
			<div class="inputWrapper">
				<label for="inputText">Hyper text:</label>
				<input required type="text" name="inputText" placeholder="Display" value={market.text} />
			</div>
			<button type="submit">Update</button>
		</div>
	</form>
</div>

<style>
	form {
		align-self: center;
		width: 100%;
		max-width: var(--size-content-2);
		& button {
			margin-block-start: var(--size-4);
		}
	}
	div {
		display: flex;
		flex-direction: column;
	}
	p {
		color: var(--link);
		font-weight: var(--font-weight-1);
	}
	span {
		color: var(--text-2);
		font-size: var(--font-size-1);
	}
	/* CLASSES */
	.formWrapper {
		width: 100%;
	}
	.inputWrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-block: var(--size-2);
		& input {
			width: 100%;
			color: var(--link);
		}
		& label {
			margin-block: var(--size-2);
			color: var(--text-2);
			font-size: var(--font-size-1);
		}
	}
</style>
