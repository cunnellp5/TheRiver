<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import Users from 'lucide-svelte/icons/users';
	import market from '$lib/data/json/market.json';
	import Marquee from '$lib/components/ui/Marquee.svelte';

	export let data;
</script>

<section class="app-layout">
	<div class="top-user-card">
		<Card.Root>
			<Card.Header>
				<div class="headWrapper">
					<Card.Title>
						{data.user?.firstName}
						{data.user?.lastName}
					</Card.Title>
					<Users />
				</div>
				<Card.Description></Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="adminIntroCardWrapper">
					<Table.Root>
						<!-- <Table.Caption>User information</Table.Caption> -->
						<Table.Header>
							<!-- <Table.Row></Table.Row> -->
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Email</Table.Cell>
								<Table.Cell>{data.user?.email}</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Subscription</Table.Cell>
								<Table.Cell>{data.user?.isSubscribed}</Table.Cell>
							</Table.Row>
							<!-- {#each Object.entries(business) as [key, value]}
									<Table.Row>
											<Table.Cell>{key.toUpperCase()}</Table.Cell>
											<Table.Cell>{value}</Table.Cell>
											<div class="button-wrapper">
												<button class="update-button">edit</button>
											</div>
									</Table.Row>
								{/each} -->
						</Table.Body>
					</Table.Root>
				</div>
			</Card.Content>
			<Card.Footer>
				<div class="pw-reset">
					<a href="/reset"> Reset Password </a>
				</div>
			</Card.Footer>
		</Card.Root>
	</div>

	<div class="cardsWrapper">
		<Card.Root>
			<Card.Header>
				<Card.Title>Services</Card.Title>
				<Card.Description>History</Card.Description>
			</Card.Header>
			<Card.Content>
				<table>
					<tr>
						<th>Service</th>
						<th>Date</th>
						<th>Cost</th>
					</tr>
					<!-- {#each data.user?.services as service} -->
					<tr>
						<td>Nails</td>
						<td>July 15th</td>
						<td>$50</td>
					</tr>
					<tr>
						<td>wax</td>
						<td>July 15th</td>
						<td>$50</td>
					</tr>
					<!-- {/each} -->
				</table>
			</Card.Content>
			<Card.Footer>
				<a href="/services">
					<button class="primary">See Services</button>
				</a>
			</Card.Footer>
		</Card.Root>

		<!-- <Card.Root>
			<Card.Header>
				<Card.Title>Newsletter</Card.Title>
				<Card.Description>No personal information is shared with anyone</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="newsletter-content-wrapper">
					<p>
						You are currently
						<span class="isSubscribed">
							{data.user?.isSubscribed ? 'SUBSCRIBED' : 'NOT SUBSCRIBED'}
						</span>
						to the newsletter
					</p>
				</div>
			</Card.Content>
			<Card.Footer>
				<button class="secondary"> Unsubscribe </button>
			</Card.Footer>
		</Card.Root> -->

		<Card.Root>
			<Card.Header>
				<Card.Title>Merch</Card.Title>
				<Card.Description>Handmade jewelry</Card.Description>
				<Card.Description>Custom clothes</Card.Description>
				<Card.Description>And more!</Card.Description>
			</Card.Header>
			<Card.Footer>
				<a href={market.url} target="_blank">
					<button class="secondary"> Etsy store </button>
				</a>
			</Card.Footer>
		</Card.Root>

		<!-- <Card.Root>
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis vel dolor, at error
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus dolorum neque sequi soluta
				</p>
			</Card.Content>
			<Card.Footer>
				<p>Footer text</p>
			</Card.Footer>
		</Card.Root> -->
	</div>
</section>

<style>
	table {
		width: 100%;
	}
	.headWrapper,
	.newsletter-content-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.cardsWrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: var(--size-3);
	}
	.top-user-card {
		margin-block: var(--size-7);
	}
	.pw-reset {
		padding-inline-end: var(--size-7);
		width: 100%;
		font-size: var(--font-size-1);
		text-align: end;
	}
	.isSubscribed {
		/* color: var(--color-primary); */
		font-weight: bold;
	}
	.adminIntroCardWrapper {
		display: flex;
		justify-content: center;
		width: 25%;
	}
</style>
