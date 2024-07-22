import type { InferOutput } from 'valibot';
import { object, string, url, nonEmpty, pipe } from 'valibot';

export const ArticleSchema = object({
	articleTitle: pipe(
		string('Your article title must be a string.'),
		nonEmpty('Please enter your article title.')
	),

	author: pipe(string('Your author must be a string.'), nonEmpty('Please enter your author.')),

	description: pipe(
		string('Your description must be a string.'),
		nonEmpty('Please enter your description.')
	),

	img: pipe(string('Your img must be a string.'), nonEmpty('Please enter your img.')),

	link: pipe(
		string('Your link must be a string.'),
		nonEmpty('Please enter your link.'),
		url('Please enter a valid URL.')
	)
});

export type ArticleValidator = InferOutput<typeof ArticleSchema>;
