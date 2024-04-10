// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface EventHandlers {
			preventDefault: () => void;
			stopPropagation: () => void;
		}
		// interface Error {}
		interface Locals {
			user: import('lucia').User;
			session: import('lucia').Session;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { EventHandlers };
