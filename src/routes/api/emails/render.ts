import type { Component, ComponentProps } from 'svelte';
import { render as svelteRender } from 'svelte/server';
import doctype from './doctype';

export const render = ({
	template,
	props,
	options
}: {
	template: Component;
	props?: any;
	options?: {
		plainText?: boolean;
		pretty?: boolean;
	};
}) => {
	// @ts-ignore
	// const { html } = template.render(props);
	const htmlObj = svelteRender(template, { props });
	// if (options?.plainText) {
	// 	return renderAsPlainText(html);
	// }
	// console.log(Object.keys(htmlObj));
	// const markup = htmlObj.body; // {head, html, body}
	const document = `${doctype}${htmlObj.head}${htmlObj.body}`;
	// if (options?.pretty) {
	// 	return pretty(document);
	// }
	return document;
};

// const renderAsPlainText = (markup: string) => {
// 	return convert(markup, {
// 		selectors: [
// 			{ selector: 'img', format: 'skip' },
// 			{ selector: '#__svelte-email-preview', format: 'skip' }
// 		]
// 	});
// };
