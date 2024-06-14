interface TimeSlot {
	startTime: Date;
	endTime: Date;
	available: boolean;
	day: string;
}

export function convertTimeSlots(timeSlots: TimeSlot[]) {
	const events = [];

	timeSlots.forEach((timeSlot) => {
		const start = new Date(timeSlot.startTime);
		const end = new Date(timeSlot.endTime);
		const day = new Date(timeSlot.day);

		if (Number.isNaN(day.getTime())) {
			console.error(`Invalid date string: ${timeSlot.day}`);
			return;
		}

		events.push({
			start: `${day.toISOString().slice(0, 10)}T${start.toTimeString().slice(0, 8)}`,
			end: `${day.toISOString().slice(0, 10)}T${end.toTimeString().slice(0, 8)}`,
			title: 'Available', // TODO use title from admin form,
			selectable: true,
			editable: false,
			durationEditable: false,
			startEditable: false,
			color: 'rgb(18, 184, 134)'
		});
	});

	return events;
}

// Temporary events for calendar display
function padNumbers(num: number) {
	const norm = Math.floor(Math.abs(num));
	return (norm < 10 ? '0' : '') + norm;
}

export function createEvents() {
	const days = [];
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < 7; i++) {
		const day = new Date();
		const diff = i - day.getDay();
		day.setDate(day.getDate() + diff);
		days[i] = `${day.getFullYear()}-${padNumbers(day.getMonth() + 1)}-${padNumbers(day.getDate())}`;
	}

	return [
		{ start: `${days[0]} 00:00`, end: `${days[0]} 09:00`, resourceId: 1, display: 'background' },
		{ start: `${days[1]} 12:00`, end: `${days[1]} 14:00`, resourceId: 2, display: 'background' },
		{ start: `${days[2]} 17:00`, end: `${days[2]} 24:00`, resourceId: 1, display: 'background' },
		{
			start: `${days[0]} 10:00`,
			end: `${days[0]} 14:00`,
			resourceId: 1,
			title: 'The calendar can display background and regular events',
			color: '#FE6B64'
		},
		{
			start: `${days[1]} 16:00`,
			end: `${days[2]} 08:00`,
			resourceId: 2,
			title: 'An event may span to another day',
			color: '#B29DD9'
		},
		{
			start: `${days[2]} 09:00`,
			end: `${days[2]} 13:00`,
			resourceId: 2,
			title: 'Events can be assigned to resources and the calendar has the resources view built-in',
			color: '#779ECB'
		},
		{
			start: `${days[3]} 14:00`,
			end: `${days[3]} 20:00`,
			resourceId: 1,
			title: '',
			color: '#FE6B64'
		},
		{
			start: `${days[3]} 15:00`,
			end: `${days[3]} 18:00`,
			resourceId: 1,
			title: 'Overlapping events are positioned properly',
			color: '#779ECB'
		},
		{
			start: `${days[5]} 10:00`,
			end: `${days[5]} 16:00`,
			resourceId: 2,
			title: { html: 'You have complete control over the <i><b>display</b></i> of events…' },
			color: '#779ECB'
		},
		{
			start: `${days[5]} 14:00`,
			end: `${days[5]} 19:00`,
			resourceId: 2,
			title: '…and you can drag and drop the events!',
			color: '#FE6B64'
		},
		{
			start: `${days[5]} 18:00`,
			end: `${days[5]} 21:00`,
			resourceId: 2,
			title: '',
			color: '#B29DD9'
		},
		{
			start: days[1],
			end: days[3],
			resourceId: 1,
			title: 'All-day events can be displayed at the top',
			color: '#B29DD9',
			allDay: true
		}
	];
}

// Configuration options for the calendar
export const configOptions = {
	// height: '900px',
	// scrollTime: '09:00:00',
	// slotMinTime: '05:00:00',
	// slotMaxTime: '22:00:00',
	slotDuration: '00:15:00',
	view: 'timeGridWeek',
	nowIndicator: true,
	slotLabelFormat: {
		hour: 'numeric',
		minute: '2-digit',
		meridiem: 'short'
	},
	headerToolbar: {
		start: 'title dayGridMonth,timeGridWeek,timeGridDay listYear,listMonth,listWeek,listDay',
		center: '',
		end: 'today prev,next'
	},
	buttonText: {
		listDay: 'listDay',
		listYear: 'listYear',
		listMonth: 'listMonth',
		listWeek: 'listWeek',
		dayGridMonth: 'month',
		timeGridWeek: 'week',
		timeGridDay: 'day',
		today: 'today'
	},
	selectable: true,
	editable: true,
	selectBackgroundColor: 'red',
	pointer: true,
	popup: true
};
