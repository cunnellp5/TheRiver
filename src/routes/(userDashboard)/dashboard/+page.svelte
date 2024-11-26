<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import market from '$lib/data/json/market.json';
	import { addToast } from '$lib/stores/toast';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Users from 'lucide-svelte/icons/users';
	import X from 'lucide-svelte/icons/x';
	import { enhance } from '$app/forms';
	import DashboardUserRow from './DashboardUserRow.svelte';

	let { data, form = $bindable() } = $props();
	let showModal = $state(false);
	let emailInput = $state('');
	let loading = $state(false);

	function resetForm() {
		form = null;
	}

	let disabledDelete = $derived(emailInput !== data.user.email);
</script>

<Seo
	title={'Dashboard - Manage Your Profile and Settings'}
	description={'Access your personal dashboard to manage your profile, settings, and preferences. Stay organized and control your account efficiently.'} />

<Modal bind:showModal overrideButtons={true}>
	{#snippet header()}
		<h2>
			Delete this account
			<br />
			<small>{data.user.firstName}, are you sure?</small>
		</h2>
	{/snippet}
	<section class="modalBody">
		<div>
			<p>Once you delete your account, there is no going back. Please be certain.</p>
			<p class="subText">You will be removed from the newsletter, if you signed up</p>
		</div>

		<form
			id="deleteForm"
			action="?/deleteAccount"
			method="POST"
			use:enhance={async () => {
				loading = true;
				return async ({ result, update }) => {
					if (result.status === 302) {
						addToast({
							message: 'Account deleted',
							type: 'message',
							dismissible: true,
							timeout: 5000,
							iconType: 'warning'
						});
					}
					showModal = false;
					update();
				};
			}}>
			<label for="typedEmail">Email</label>
			<input
				type="text"
				name="typedEmail"
				bind:value={emailInput}
				placeholder="Type email to unlock" />
			<input type="hidden" name="id" value={data.user.id} />
			<input type="hidden" name="userEmail" value={data.user.email} />
		</form>
	</section>
	{#snippet buttons()}
		<div class="buttonWrapper">
			<button
				form="deleteForm"
				type="submit"
				class:delete-button={!disabledDelete}
				class:diabledDelete={disabledDelete}
				disabled={disabledDelete}>Permanently Delete</button>
			<button type="button" onclick={() => (showModal = false)}>Close</button>
		</div>
	{/snippet}
</Modal>

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
									<p class="errorMessage">{form?.message}</p>
									<button class="rmButtonStyles" onclick={resetForm} aria-label="Reset Form">
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
							<Table.Cell colspan={2}>
								<div class="dangerRow">
									<div>
										<p>Reset password</p>
										<span class="text2"> Sends a reset password link to your email </span>
									</div>
									<a href="/reset" class="center">
										<button class="update-button"> Reset Password </button>
									</a>
								</div>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell colspan={2}>
								<div class="dangerRow">
									<div>
										<p>Delete account</p>
										<span class="text2">
											Once you delete your account, there is no going back.
										</span>
									</div>
									<div class="center">
										<button class="delete-button" onclick={() => (showModal = true)}>
											Delete Account
										</button>
									</div>
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
	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		& label {
			color: var(--text-2);
			font-size: var(--font-size-0);
		}
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
		width: 50%;
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
	.modalBody {
		display: flex;
		flex-direction: column;
		gap: var(--size-7);
	}
	.diabledDelete {
		opacity: 0.5;
	}
	.subText {
		margin-block-start: var(--size-2);
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
	.dangerRow {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-3);
	}

	@media (max-width: 1440px) {
		.adminIntroCardWrapper {
			width: 70%;
		}
		.cardsWrapper {
			width: 70%;
		}
	}
	@media (max-width: 768px) {
		.adminIntroCardWrapper {
			width: 100%;
		}
		.cardsWrapper {
			width: 100%;
		}
		.dangerRow {
			display: flex;
			flex-direction: column;
			align-items: start;
		}
		.delete-button,
		.update-button,
		.center {
			width: 100%;
		}
	}
</style>
