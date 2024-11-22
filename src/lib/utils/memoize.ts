export function memoize(fn: Function) {
	const cache = new Map();

	return async function (...args: any[]) {
		const key = JSON.stringify(args);

		if (cache.has(key)) {
			return cache.get(key);
		}

		const result = await fn(...args);

		cache.set(key, result);

		return result;
	};
}
