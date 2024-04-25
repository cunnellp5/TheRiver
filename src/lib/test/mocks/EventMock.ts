import { vi, type Mock } from 'vitest';
import type CookiesMock from './CookiesMock';
import type RequestMock from './RequestMock';
import type { RouteParams } from '../../../routes/$types';

export default class MockedEvent {
	request: RequestMock;

	cookies: CookiesMock;

	fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

	getClientAddress: () => string;

	locals: { session: null; user: null };

	params: RouteParams;

	platform: string;

	route: { id: '/(auth)/signup' }; // Change the type of the 'id' property to '"/(auth)/signup"'

	setHeaders: Mock;

	url: URL;

	isDataRequest: boolean;

	isSubRequest: boolean;

	constructor(
		request: RequestMock,
		cookies: CookiesMock,
		platform = 'testPlatform',
		isDataRequest = false,
		isSubRequest = false
	) {
		this.request = request;
		this.cookies = cookies;
		this.fetch = vi.fn().mockResolvedValue(new Response());
		this.getClientAddress = () => '127.0.0.1';
		this.locals = {
			session: null,
			user: null
		};
		this.params = {};
		this.platform = platform;
		this.route = {
			id: '/(auth)/signup' // Now you can assign a '"/(auth)/signup"' to 'id'
		}; // Fix: Update the type of the 'id' property to be an empty string
		this.setHeaders = vi.fn();
		this.url = new URL('http://localhost/');
		this.isDataRequest = isDataRequest;
		this.isSubRequest = isSubRequest;
	}
}
