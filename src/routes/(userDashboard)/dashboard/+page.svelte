<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import Users from 'lucide-svelte/icons/users';

	export let data;

	console.log(data.user);
</script>

<section>
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
				<ul>
					<li>
						{data.user?.email}
					</li>
				</ul>
			</Card.Content>
			<Card.Footer>
				<div class="pw-reset">
					<a href="/reset">
						<!-- <button class="secondary"> -->
						Reset Password
						<!-- </button> -->
					</a>
				</div>
			</Card.Footer>
		</Card.Root>
	</div>

	<div class="cardsWrapper">
		<Card.Root>
			<Card.Header>
				<Card.Title>Services</Card.Title>
				<Card.Description>History of appts</Card.Description>
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
					<button class="primary">Schedule</button>
				</a>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Newsletter</Card.Title>
				<Card.Description>
					None of your info is shared with third parties or anyone other than TheRiver
				</Card.Description>
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
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Merch</Card.Title>
				<Card.Description>Check the store</Card.Description>
			</Card.Header>
			<Card.Content>
				<div>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid voluptatum consequatur
					veniam neque quisquam doloribus praesentium eum provident quasi expedita tenetur quam
					suscipit, obcaecati quod perferendis harum deserunt labore consectetur!
				</div>
			</Card.Content>
			<Card.Footer>
				<a href="/reset">
					<button class="secondary"> Etsy </button>
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
</style>
