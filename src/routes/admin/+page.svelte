<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Welcome</Card.Title>
			<Card.Description>Update all content on your website</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>👈 Use the side menu to find what you want to change</p>
			<p>
				🗒️ Each section is divided by page and each page has its own section for the related content
			</p>
		</Card.Content>
	</Card.Root>
</div>

<style>
	p {
		margin-block: var(--size-2);
		font-size: var(--font-size-1);
	}
</style>
