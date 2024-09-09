import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import doctype from './doctype';

export const render = <Component extends SvelteComponent>({
	template,
	props,
	options
}: {
	template: ComponentType<Component>;
	props?: ComponentProps<Component>;
	options?: {
		plainText?: boolean;
		pretty?: boolean;
	};
}) => {
	// @ts-ignore
	const { html } = template.render(props);
	// if (options?.plainText) {
	// 	return renderAsPlainText(html);
	// }
	const markup = html;
	const document = `${doctype}${markup}`;
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
