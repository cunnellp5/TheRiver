import { vi } from 'vitest';

export default class FormDataMock {
	private data: Record<string, string | null>;

	constructor(initialData: Record<string, string | null> = {}) {
		this.data = initialData;
	}

	append(key: string, value: string | null) {
		this.data[key] = value;
	}

	get = vi.fn((key: string) => this.data[key] || null);

	getAll() {
		return this.data;
	}
}
