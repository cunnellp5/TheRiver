import { parse, ValiError } from 'valibot';
import { fail } from '@sveltejs/kit';

export function validateInputs(schema: any, data: any) {
	try {
		parse(schema, data); // want data to be an object
		return null; // No errors
	} catch (err) {
		const errors = err as ValiError<typeof schema>;
		return fail(400, {
			message: errors.message
		});
	}
}
