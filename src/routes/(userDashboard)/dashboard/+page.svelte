<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import Users from 'lucide-svelte/icons/users';
	import market from '$lib/data/json/market.json';
	import DashboardUserRow from './DashboardUserRow.svelte';
	import X from 'lucide-svelte/icons/x';

	export let data;
	export let form;

	function resetForm() {
		form = null;
	}
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
						<Table.Body>
							{#if form?.status !== 200 && form?.message}
								<div class="buttonWrapper">
									<p class="error-message">{form?.message}</p>
									<button class="rmButtonStyles" on:click={resetForm} aria-label="Reset Form">
										<X />
									</button>
								</div>
							{/if}
							{#each Object.entries(data.user) as [key, value]}
								{#if key !== 'id'}
									<DashboardUserRow {key} {value} id={data.user.id} />
								{/if}
							{/each}
							<Table.Row>
								<Table.Cell colspan={2}>
									<a href="/reset" class="center"> Reset Password </a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell colspan={2}>
									<div class="center">
										<button class="delete-button"> Delete Account </button>
									</div>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="cardsWrapper">
		<Card.Root>
			<Card.Header>
				<Card.Title>Services</Card.Title>
				<Card.Description>Nails</Card.Description>
				<Card.Description>Hair</Card.Description>
			</Card.Header>
			<Card.Footer>
				<a href="/services">
					<button class="primary">View all services</button>
				</a>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Merch</Card.Title>
				<Card.Description>Handmade jewelry</Card.Description>
				<Card.Description>Custom clothes</Card.Description>
			</Card.Header>
			<Card.Footer>
				<a href={market.url} target="_blank">
					<button class="secondary"> Etsy store </button>
				</a>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Music</Card.Title>
				<Card.Description>Videos</Card.Description>
				<Card.Description>Tracks</Card.Description>
				<Card.Description>Stems to download</Card.Description>
			</Card.Header>
			<Card.Footer>
				<a href="/music">
					<button class="primary"> Beats </button>
				</a>
			</Card.Footer>
		</Card.Root>
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
	.adminIntroCardWrapper {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		width: 50%;
	}
	.error-message {
		color: var(--red-7);
		font-size: var(--font-size-0);
	}
	.buttonWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--size-2);
	}
	.center {
		display: flex;
		justify-content: center;
		/* gap: var(--size-3); */
		/* width: 100%; */
	}
</style>
