<!-- <script lang="ts">
	import { run } from 'svelte/legacy';

	import calendarize from 'calendarize';
	// import Arrow from './Arrow.svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import formatHours from '$lib/utils/formatHours';

	interface Props {
		year?: any;
		month?: any;
		offset?: number; // Sun
		today?: Date;
		timeSlots?: any;
		labels?: any;
		months?: any;
	}

	let {
		year = $bindable(new Date().getFullYear()),
		month = $bindable(new Date().getMonth()),
		offset = 0,
		today = new Date(),
		timeSlots = [],
		labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	}: Props = $props();

	// $: today_month = today && today.getMonth();
	// $: today_year = today && today.getFullYear();
	// $: today_day = today && today.getDate();

	let prev = calendarize(new Date(year, month - 1), offset);
	let current = $state(calendarize(new Date(year, month), offset));
	let next = calendarize(new Date(year, month + 1), offset);

	let selectedDate = $state(null);

	function selectDate(date) {
		selectedDate = date;
	}

	function toPrev() {
		selectedDate = null;

		[current, next] = [prev, current];

		month -= 1;

		if (month < 0) {
			month = 11;
			year -= 1;
		}

		prev = calendarize(new Date(year, month - 1), offset);
	}

	function toNext() {
		selectedDate = null;

		[prev, current] = [current, next];

		month += 1;

		if (month > 11) {
			month = 0;
			year += 1;
		}

		next = calendarize(new Date(year, month + 1), offset);
	}

	function isBeforeToday(date: number | undefined) {
		const now = new Date();
		now.setHours(0, 0, 0, 0);
		return new Date(year, month, date) < now;
	}

	function isWeekend(date: number | undefined) {
		const dayOfWeek = new Date(year, month, date).getDay();
		return dayOfWeek === 0 || dayOfWeek === 6; // 0 is Sunday, 6 is Saturday
	}

	function getWeek(date: number | Date) {
		const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
		const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
		return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
	}

	function isToday(date, calendarWeek, calendarYear) {
		return (
			date === today.getDate() &&
			calendarWeek === getWeek(today) &&
			calendarYear === today.getFullYear()
		);
	}

	function goToToday() {
		const now = new Date();
		month = now.getMonth();
		year = now.getFullYear();
		current = calendarize(now, offset);
		prev = calendarize(new Date(year, month - 1), offset);
		next = calendarize(new Date(year, month + 1), offset);
		selectedDate = now.getDate();
	}

	let timeSlotsByDate = $state({});
	run(() => {
		timeSlotsByDate = timeSlots?.reduce((acc, slot) => {
			const dateStr = slot.day.toISOString().split('T')[0]; // Get the date part of the ISO string
			if (!acc[dateStr]) {
				acc[dateStr] = [];
			}
			acc[dateStr].push(slot);
			return acc;
		}, {});
	});
</script>

<button onclick={goToToday}>today</button>

{selectedDate}

<div class="surface-4 calendar-wrapper">
	<header>
		<div onclick={toPrev}>
			<ArrowLeft />
		</div>
		<h4>{months[month]} {year}</h4>
		<div onclick={toNext}>
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
							class:before-today={isBeforeToday(current[idxw][idxd])}
							class:selected={selectedDate === current[idxw][idxd]}
							class:weekend={isWeekend(current[idxw][idxd])}
							class:today={isToday(
								current[idxw][idxd],
								getWeek(new Date(year, month, current[idxw][idxd])),
								year
							)}
							onclick={() => selectDate(current[idxw][idxd])}>
							<p>{current[idxw][idxd]}</p>
							{#if timeSlotsByDate[new Date(year, month, current[idxw][idxd])
									.toISOString()
									.split('T')[0]]}
								{#each timeSlotsByDate[new Date(year, month, current[idxw][idxd])
										.toISOString()
										.split('T')[0]] as slot (slot.id)}
									<p>{formatHours(slot.startTime)} - {formatHours(slot.endTime)}</p>
								{/each}
							{/if}
						</span>
					{:else if idxw < 1}{:else}{/if}
				{/each}
			{/if}
		{/each}
	</div>
</div>

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-block-end: var(--size-4);
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
		cursor: pointer;
		text-align: center;
		/* grid-gap: var(--size-1); */
	}

	.calendar-wrapper {
		box-shadow: var(--shadow-2);
		border-radius: var(--radius-2);
		/* padding-inline: var(--size-7); */
		padding: var(--size-4);
		max-width: var(--size-14);
	}

	.label {
		/* position: sticky; */
		/* top: 0; */
		opacity: 0.6;
		margin-bottom: 0.5rem;
		font-weight: 100;
		font-size: var(--font-size-00);
		text-align: center;
		text-transform: uppercase;
	}

	.date {
		/* height: var(--size-12); */
		/* height: 100%; */
		/* font-weight: 500; */
		/* font-size: var(--size-7); */
		/* letter-spacing: var(--font-letterspacing-0); */
		position: relative;
		border: 0.5px solid hsl(var(--stone-6-hsl) / 30%);
		background-color: hsl(var(--stone-3-hsl) / 6%);
		/* padding-right: var(--size-1); */
		padding: 0.5rem;
	}

	.date:hover {
		border: 0.5px solid hsl(var(--stone-6-hsl) / 90%);
	}

	.date.today {
		border-color: currentColor;
		border: 1px solid hsl(var(--stone-3-hsl) / 100%);
		color: hsl(var(--green-4-hsl) / 100%);
	}

	/* .date.other {
		opacity: 0.5;
		background: hsl(var(--stone-9-hsl) / 30%);
	} */

	.weekend {
		background-color: inherit;
	}
	/*
	.before-today::after {
		position: absolute;
		top: 50%;
		left: 25%;
		transform: rotate(-45deg);
		background: var(--gradient-2) fixed;
		width: 50%;
		height: 1px;
		content: '';
	} */

	.before-today {
		color: var(--gray-7);
	}

	.selected {
		/* color: var(--surface-1); */

		/* border: 1px solid var(--gradient-2); */
		background: hsl(var(--indigo-3-hsl) / 20%);
		color: var(--pink-3);
	}
</style> -->
