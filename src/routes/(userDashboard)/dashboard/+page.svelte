<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import Users from 'lucide-svelte/icons/users';
	import market from '$lib/data/json/market.json';
	import DashboardUserRow from './DashboardUserRow.svelte';
	import X from 'lucide-svelte/icons/x';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

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
						</Table.Body>
					</Table.Root>
				</div>
				<!-- <Card.Footer>Settings</Card.Footer> -->
			</Card.Content>
		</Card.Root>
	</div>

	<div class="cardsWrapper">
		<Card.Root>
			<Card.Header>
				<Card.Title>Navigation</Card.Title>
				<Card.Description>Explore the site!</Card.Description>
				<!-- <Card.Description>Hair</Card.Description> -->
			</Card.Header>
			<Card.Content>
				<ul>
					<a href="/music">
						<li>
							<ArrowRight size={12} />
							Beats
						</li>
					</a>
					<a href="/services">
						<li>
							<ArrowRight size={12} />
							Services
						</li>
					</a>
					<a href={market.url} target="_blank">
						<li>
							<ArrowRight size={12} />
							Etsy
						</li>
					</a>
					<a href="/blog">
						<li>
							<ArrowRight size={12} />
							Blog
						</li>
					</a>
					<a href="/contact">
						<li>
							<ArrowRight size={12} />
							Contact
						</li>
					</a>
				</ul>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Danger Zone</Card.Title>
				<!-- <Card.Description>Handmade jewelry</Card.Description> -->
				<!-- <Card.Description>Custom clothes</Card.Description> -->
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<p class="text2">Reset password</p>
								<span> This cannot be undone. </span>
							</Table.Cell>
							<Table.Cell>
								<a href="/reset" class="center">
									<button class="update-button"> Reset Password </button>
								</a>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<p class="text2">Account Deletion</p>
								<span> This is permanent. </span>
							</Table.Cell>
							<Table.Cell>
								<div class="center">
									<button class="delete-button"> Delete Account </button>
								</div>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
			<Card.Content></Card.Content>
			<Card.Footer></Card.Footer>
		</Card.Root>
	</div>
</section>

<style>
	/* ELEMENTS */
	li {
		display: flex;
		gap: var(--size-2);
		margin-block: var(--size-2);
	}
	a {
		position: relative;
		color: var(--text-2);
		text-decoration: none;
	}

	ul a::after {
		position: absolute;
		bottom: 0;
		left: 0;
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
		background-color: var(--link);
		width: 100%;
		height: 1px;
		content: '';
	}
	ul a:hover {
		color: var(--link);
	}

	ul a:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
	/* CLASSES */
	.headWrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.cardsWrapper {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
		margin: 0 auto;
		width: 70%;
	}
	.top-user-card {
		margin-block: var(--size-7);
	}
	.adminIntroCardWrapper {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		width: 70%;
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
	}
	.text2 {
		color: var(--text-2);
	}
	@media (max-width: 768px) {
		.adminIntroCardWrapper {
			width: 100%;
		}
		.cardsWrapper {
			width: 100%;
		}
	}
</style>
