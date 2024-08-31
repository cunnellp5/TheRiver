export function throttle(fn: Function, wait: number) {
	let lastTime = 0;
	return function (...args: any) {
		const now = new Date().getTime();
		if (now - lastTime >= wait) {
			lastTime = now;
			fn(...args);
		}
	};
}
