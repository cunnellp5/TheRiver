import { describe, it, expect, vi, afterEach, test } from 'vitest';
import CookiesMock from '$lib/test/mocks/CookiesMock';
import RequestMock from '$lib/test/mocks/RequestMock';
import MockedEvent from '$lib/test/mocks/EventMock';
import SignUpFormDataMissingField from '$lib/test/__fixtures__/SignUpFormDataMissingField';
import FormDataMock from '$lib/test/mocks/FormDataMock';
import SignUpFormDataStrings from '$lib/test/__fixtures__/SignUpFormDataStrings';
import { actions } from './+page.server';

type MockObject = {
	email: string | unknown; // i want to test edge cases
	password: string | unknown; // i want to test edge cases
	firstName: string | unknown; // i want to test edge cases
	lastName: string | unknown; // i want to test edge cases
	isSubscribed: string | unknown; // i want to test edge cases
	confirm: string | unknown; // i want to test edge cases
};

type ActionFailure = {
	status: number;
	data: {
		message: string;
	};
	[key: string]: unknown;
};

function createEventForAction(data: MockObject): MockedEvent {
	const formData = new FormDataMock(data);

	const request = new RequestMock(formData);

	const cookies = new CookiesMock();

	return new MockedEvent(request, cookies);
}

describe('Signup', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe('actions [default]', () => {
		const expected = { message: 'Please fill out all fields' };

		describe('auth pt1 missing FormData', () => {
			test.each(SignUpFormDataMissingField)(
				'is null -> ActionFailure',
				async (data: MockObject) => {
					const event = createEventForAction(data);

					const response = (await actions.default(event)) as ActionFailure;

					expect(response.status).toEqual(400);

					expect(response.data).toEqual(expected);
				}
			);
		});

		describe('auth pt2 valibot', () => {
			// boolean field is coerced on line 45, cannot test as it will result in false if it doesnt === 'on' from the ui SliderToggle
			test.each(SignUpFormDataStrings)('not strings -> ActionFailure', async (data) => {
				const event = createEventForAction(data);

				const response = (await actions.default(event)) as ActionFailure;

				expect(response.status).toEqual(400);

				expect(response.data.message).contains('must be a string');
			});
		});

		describe('email', () => {
			test.each([
				{ email: 'test@.com' },
				{ email: 'o' },
				{ email: 'test@@example.com' },
				{ email: 'test@example..com' }
			])('throws -> ActionFailure', async (data) => {
				const formData = {
					...data,
					password: 'password',
					firstName: 'firstname',
					lastName: 'User',
					isSubscribed: 'true',
					confirm: 'password'
				};

				const event = createEventForAction(formData);

				const response = (await actions.default(event)) as ActionFailure;

				expect(response.status).toEqual(400);

				expect(response.data.message).contains(`Invalid email: Received "${data.email}"`);
			});
		});

		// TODO mock db and test email in db
		describe.skip('validate Email in Db', () => {
			it('shows email already exists if email is in db', () => {});
		});
	});
});
