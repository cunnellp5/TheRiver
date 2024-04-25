import { describe, it, expect, vi, afterEach, test } from 'vitest';
import CookiesMock from '$lib/test/mocks/CookiesMock';
import RequestMock from '$lib/test/mocks/RequestMock';
import MockedEvent from '$lib/test/mocks/EventMock';
import { SignUpFormData } from '$lib/test/__fixtures__/SignUpFormData';
import FormDataMock from '$lib/test/mocks/FormDataMock';
import { actions } from './+page.server';

describe('Signup', () => {
	describe('actions', () => {
		afterEach(() => {
			vi.restoreAllMocks();
		});

		const expected = { message: 'Please fill out all fields' };

		test.each(SignUpFormData)('if any are null -> Please fill out all fields', async (data) => {
			// mock formData
			const formData = new FormDataMock(data);

			// Mock the request object
			const request = new RequestMock(formData);

			// Mock the cookies object
			const cookies = new CookiesMock();

			// Mock the event object
			const event = new MockedEvent(request, cookies);

			// Call the default action
			const response = (await actions.default(event)) as Record<'status', number> &
				Record<'data', { message: string }> &
				Record<string, unknown>;

			expect(response.status).toEqual(400);
			expect(response.data.message).toEqual(expected.message);
		});
	});
});
