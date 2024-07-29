<script>
	import * as Table from '$lib/components/ui/shadcn/table';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];

	export let data;
	export let form;

	let loading = false;

	$: ({ videos } = data);
</script>

<ul>
	<li>Clicking the button below will fetch the latest youtube videos and update the DB</li>
	<li>The <em>/music/videos</em> section will then have the latest videos</li>
</ul>

<Table.Root>
	<Table.Caption>A list of your recent invoices.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Invoice</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Method</Table.Head>
			<Table.Head class="text-right">Amount</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each invoices as invoice, i (i)}
			<Table.Row>
				<Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
				<Table.Cell>{invoice.paymentStatus}</Table.Cell>
				<Table.Cell>{invoice.paymentMethod}</Table.Cell>
				<Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>

<div class="video-data-wrapper">
	{#if form}
		<div>
			<h4>youtube data</h4>
			<pre>{JSON.stringify(form, null, 2)}</pre>
			<form method="POST" action="?/updateDb">
				<input type="hidden" name="iframes" value={form} />
				<button class="primary" type="submit">Update the DB</button>
			</form>
		</div>
	{/if}

	<ul class="videos-from-db">
		{#if videos.length === 0}
			<li>No videos in the db</li>
		{:else}
			<h4>DB data</h4>
			{#each videos as { id, iframe, updatedAt, createdAt } (id)}
				<li>
					<p>{iframe}</p>
					<p>{updatedAt}</p>
					<p>{createdAt}</p>
				</li>
			{/each}
		{/if}
	</ul>
</div>

{#if loading}
	<div class="loader">Loading...</div>
{/if}

<form
	method="POST"
	action="?/getLatestYoutubeVideos"
	use:enhance={({ cancel }) => {
		loading = true;
		// eslint-disable-next-line no-alert, no-restricted-globals
		if (confirm('This updates our DB with the latest youtube videos. Are you sure?')) {
			return async ({ update }) =>
				update().finally(() => {
					loading = false;
				});
		}
		loading = false;
		return cancel();
	}}>
	<button class="secondary" type="submit">Get latest youtube videos</button>
</form>

<style>
	/* ELEMENTS */
	li {
		margin-block: var(--size-3);
		font-size: var(--font-size-1);
		list-style-type: disc;
	}
	pre {
		border: 1px solid var(--border);
		padding: var(--size-3);
		max-width: var(--size-content-3);
		overflow: auto;
	}
	button {
		margin-block: var(--size-7);
		font-weight: var(--font-weight-6);
	}

	/* CLASSES */
	.video-data-wrapper {
		display: flex;
		flex-direction: row;
		/* align-items: center; */
	}
	.videos-from-db {
		margin: var(--size-7);
		& li {
			list-style-type: none;
		}
	}
</style>
