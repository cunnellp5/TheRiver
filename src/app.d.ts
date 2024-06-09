import type { Session, User } from 'lucia';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | null;
			session: Session | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface Info {
			start: Date;
			end: Date;
			startStr: string; // ISO8601 string representation of the start date
			endStr: string; // ISO8601 string representation of the end date
			allDay: boolean;
			jsEvent: Event;
			view: View;
			resource: Resource;
		}

		interface View {
			type:
				| 'dayGridMonth'
				| 'dayGridWeek'
				| 'dayGridDay'
				| 'timeGridWeek'
				| 'timeGridDay'
				| 'listWeek'
				| 'listDay'
				| 'listMonth';
			title: string;
			currentStart: Date;
			currentEnd: Date;
			activeStart: Date;
			activeEnd: Date;
		}

		interface Resource {
			id: string;
			title: string;
			eventBackgroundColor: string;
			eventTextColor: string;
		}
	}
}
