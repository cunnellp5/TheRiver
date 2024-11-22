export function memoize(fn: Function, ttl: number = 3600) {
	const cache = new Map();
	const timeouts = new Map();

	return async function (...args: any[]) {
		const key = JSON.stringify(args);

		if (cache.has(key)) {
			return cache.get(key);
		}

		const result = await fn(...args);

		cache.set(key, result);
		if (timeouts.has(key)) {
			clearTimeout(timeouts.get(key));
		}
		timeouts.set(
			key,
			setTimeout(() => {
				cache.delete(key);
				timeouts.delete(key);
			}, ttl * 1000)
		);

		return result;
	};
}
