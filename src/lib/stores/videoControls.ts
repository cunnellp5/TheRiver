import { writable } from 'svelte/store';

function videoControl() {
	const {
		subscribe,
		// set,
		update
	} = writable(false);

	return {
		subscribe,
		play: () => update(() => true),
		pause: () => update(() => false)
		// reset: () => set(0)
	};
}

export const video = videoControl();
