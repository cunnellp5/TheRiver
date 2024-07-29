<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import SliderToggle from '$lib/components/ui/SliderToggle.svelte';
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
				<Card.Description>Brief history of your services</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus dolorum neque sequi soluta
				</p>
			</Card.Content>
			<Card.Footer>
				<a href="/services">
					<button class="primary">Schedule Service</button>
				</a>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Newsletter</Card.Title>
				<Card.Description
					>None of your info is shared with third parties or anyone other than TheRiver</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>
					You are currently
					<span class="isSubscribed">
						{data.user?.isSubscribed ? 'SUBSCRIBED' : 'NOT SUBSCRIBED'}
					</span>
					to the newsletter.
				</p>
				<p>Toggle below to change that</p>
			</Card.Content>
			<Card.Footer>
				<!-- TODO fetch user -->
				<SliderToggle checked={data.user?.isSubscribed} id="published" name="published" />
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Merch</Card.Title>
				<Card.Description>Check the store</Card.Description>
			</Card.Header>
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
	.headWrapper {
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
