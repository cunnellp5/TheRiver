<div class="fullRow">
	<div class="copywrite">
		<span>&copy;</span>
		<span>{new Date().getFullYear()}</span>
		<span>TheRiver</span>
	</div>
	<div class="endPages">
		<div class="divider"></div>
		<a href="/privacy-policy">Privacy</a>
		<div class="divider"></div>
		<a href="/terms-of-use">Terms</a>
		<div class="divider"></div>
		<a href="https://www.theriversings.com/humans.txt">Humans.txt</a>
	</div>
</div>

<style>
	.copywrite {
		display: flex;
		gap: var(--size-1);
	}
	.divider {
		top: 50%;
		margin-inline: var(--size-2);
		border-left: 1px solid var(--border);
	}
	.fullRow {
		grid-column-start: 1;
		grid-column-end: 8;
	}
	.fullRow,
	.endPages {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
	}
	.copywrite,
	.endPages {
		font-size: var(--font-size-0);
		font-family: 'Courier New', Courier, monospace;
	}
	/* MEDIA */
	@media (min-width: 768px) {
		.endPages,
		.fullRow {
			flex-direction: row;
		}
	}
</style>
