import { vi } from 'vitest';

export default class CookiesMock {
	private data: Record<string, string>;

	constructor(initialData: Record<string, string> = {}) {
		this.data = initialData;
	}

	set = vi.fn((name: string, value: string) => {
		this.data[name] = value;
	});

	get = vi.fn((name: string) => this.data[name] || undefined);

	getAll = vi.fn(() => Object.entries(this.data).map(([name, value]) => ({ name, value })));

	remove = vi.fn((name: string) => {
		delete this.data[name];
	});

	delete = vi.fn((name: string) => {
		delete this.data[name];
	});

	serialize = vi.fn();
}
