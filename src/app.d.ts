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

		// CALENDAR TYPES
		interface Info {
			start: Date;
			end: Date;
			startStr: string; // ISO8601 string representation of the start date
			endStr: string; // ISO8601 string representation of the end date
			allDay: boolean;
			jsEvent: Event;
			view: View;
			resource: Resource;
			event: Event;
			el: HTMLElement;
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
		interface Event {
			id: string;
			resourceIds: string[]; // array of resource IDs
			allDay: boolean;
			start: Date;
			end: Date;
			title: string | Content;
			editable: boolean | undefined;
			startEditable: boolean | undefined;
			durationEditable: boolean | undefined;
			display: 'auto' | 'background' | 'ghost' | 'preview' | 'pointer';
			backgroundColor: string;
			textColor: string;
			extendedProps: object;
		}

		interface Content {
			html: string;
			domNodes: HTMLElement[];
		}
	}
}
