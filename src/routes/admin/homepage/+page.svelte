<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Home Page</Card.Title>
			<Card.Description>Edit contents of the home page</Card.Description>
		</Card.Header>
		<Card.Footer>
			<ul>
				<a href="/admin/homepage/hero">
					<li>🦸 Hero</li>
				</a>
				<a href="/admin/homepage/about">
					<li>📖 About</li>
				</a>
				<a href="/admin/homepage/articles">
					<li>🗞️ Articles</li>
				</a>
			</ul>
		</Card.Footer>
	</Card.Root>
</div>

<style>
	ul {
		display: flex;
		margin-block-start: var(--size-4);
	}

	li {
		cursor: pointer;
		margin-inline: var(--size-2);
		box-shadow: var(--shadow-1);
		border: 1px solid var(--border);
		padding-inline: var(--size-6);
		padding-block: var(--size-4);
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	a:hover {
		transform: scale(1.1);
		& li {
			box-shadow: var(--shadow-2);
		}
	}
</style>
