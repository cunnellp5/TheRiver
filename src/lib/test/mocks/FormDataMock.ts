import { vi } from "vitest";

export default class FormDataMock {
  private data: Record<string, string | null>;

  // I want to pass 'any' so i can test edge cases
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(initialData: Record<string, any | null> = {}) {
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
