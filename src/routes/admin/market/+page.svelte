<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';

	export let data;
	const { business } = data;
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Market</Card.Title>
			<Card.Description>
				All the images and data loads from etsys RSS feed, so the UI should update automatically
			</Card.Description>
			<Card.Description>
				Link info comes from /admin section where all the business info is stored
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<!-- <span>Current Link</span>
			<p>
				<a href={business?.merchUrl}>
					{business?.merchUrl}
				</a>
			</p>
			<br />
			<span>Display text</span>
			<p>
				{business?.merchText}
			</p> -->
		</Card.Content>
	</Card.Root>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
	/* p {
		color: var(--link);
	}
	span {
		color: var(--text-2);
	} */
</style>
