<script lang="ts">
	import calendarize from 'calendarize';
	// import Arrow from './Arrow.svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';

	export let year = new Date().getFullYear();
	export let month = new Date().getMonth(); // Jan
	export let offset = 0; // Sun
	export let today: Date | null = null; // Date

	export let labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	export let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	$: today_month = today && today.getMonth();
	$: today_year = today && today.getFullYear();
	$: today_day = today && today.getDate();

	let prev = calendarize(new Date(year, month - 1), offset);
	let current = calendarize(new Date(year, month), offset);
	let next = calendarize(new Date(year, month + 1), offset);

	function toPrev() {
		[current, next] = [prev, current];

		if (--month < 0) {
			month = 11;
			year--;
		}

		prev = calendarize(new Date(year, month - 1), offset);
	}

	function toNext() {
		[prev, current] = [current, next];

		if (++month > 11) {
			month = 0;
			year++;
		}

		next = calendarize(new Date(year, month + 1), offset);
	}

	function isToday(day) {
		const res = today && today_year === year && today_month === month && today_day === day;
		console.log(res, 'rez');
		return res;
	}

	function isBeforeToday(date) {
		const today = new Date();
		today.setHours(0, 0, 0, 0); // set time to 00:00:00.000
		return new Date(year, month, date) < today;
	}

	function isWeekend(date) {
		const dayOfWeek = new Date(year, month, date).getDay();
		return dayOfWeek === 0 || dayOfWeek === 6; // 0 is Sunday, 6 is Saturday
	}
</script>

<header>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={toPrev}>
		<ArrowLeft />
	</div>
	<h4>{months[month]} {year}</h4>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={toNext}>
		<ArrowRight />
	</div>
</header>

<div class="month">
	{#each labels as txt, idx (txt)}
		<span class="label">{labels[(idx + offset) % 7]}</span>
	{/each}
	{#each { length: 6 } as w, idxw (idxw)}
		{#if current[idxw]}
			{#each { length: 7 } as d, idxd (idxd)}
				{#if current[idxw][idxd] !== 0}
					<span
						class="date"
						class:today={isToday(current[idxw][idxd])}
						class:before-today={isBeforeToday(current[idxw][idxd])}
						class:weekend={isWeekend(current[idxw][idxd])}>
						{current[idxw][idxd]}
					</span>
				{:else if idxw < 1}
					<span class="date other">
						{prev[prev.length - 1][idxd]}
					</span>
				{:else}
					<span class="date other">{next[0][idxd]}</span>
				{/if}
			{/each}
		{/if}
	{/each}
</div>

<style>
	.weekend {
		background-color: rgba(89, 89, 89, 0.1);
	}

	.before-today::after {
		position: absolute;
		top: 50%;
		left: 0;
		transform: rotate(-45deg);
		background-color: rgb(99, 40, 40);
		width: 100%;
		height: 3px;
		content: '';
	}

	.date {
		position: relative;
	}
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem auto;
		user-select: none;
	}

	h4 {
		display: block;
		margin: 0 1rem;
		font-size: 140%;
		text-align: center;
		text-transform: uppercase;
	}

	.month {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: right;
		grid-gap: var(--size-1);
	}

	.label {
		opacity: 0.6;
		margin-bottom: 0.5rem;
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
	}

	.date {
		border: 1px solid #e6e4e4;
		padding-right: 4px;
		padding: 0.5rem;
		height: var(--size-12);
		font-weight: 700;
		font-size: 16px;
		letter-spacing: -1px;
	}

	.date:hover {
		background: var(--surface-4);
	}

	.date.today {
		border-color: currentColor;
		background: #c4d9fd;
		color: #5286fa;
	}

	.date.other {
		opacity: 0.2;
	}
</style>
