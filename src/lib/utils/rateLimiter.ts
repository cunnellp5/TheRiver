export class RateLimiter {
	private requests: Map<string, { count: number; lastRequest: number }>;

	private limit: number;

	private windowMs: number;

	constructor(limit: number, windowMs: number) {
		this.requests = new Map();
		this.limit = limit;
		this.windowMs = windowMs;
	}

	public isRateLimited(key: string): boolean {
		const currentTime = Date.now();
		const requestInfo = this.requests.get(key);

		if (!requestInfo) {
			this.requests.set(key, { count: 1, lastRequest: currentTime });
			return false;
		}

		const timePassed = currentTime - requestInfo.lastRequest;

		if (timePassed > this.windowMs) {
			this.requests.set(key, { count: 1, lastRequest: currentTime });
			return false;
		}

		if (requestInfo.count >= this.limit) {
			return true;
		}

		this.requests.set(key, { count: requestInfo.count + 1, lastRequest: currentTime });
		return false;
	}
}
