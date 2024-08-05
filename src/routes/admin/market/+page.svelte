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
<form method="POST">
	<div>
		<input
			required
			type="text"
			name="inputUrl"
			placeholder="https://put-link-here.com"
			value={market.url} />
		<input required type="text" name="inputText" placeholder="Display" value={market.text} />
		<button type="submit">Update</button>
	</div>
</form>

<style>
	form {
		max-width: var(--size-content-2);
	}
	div {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
	}
	p {
		color: var(--link);
		font-weight: var(--font-weight-1);
	}
	span {
		color: var(--text-2);
		font-size: var(--font-size-1);
	}
</style>
