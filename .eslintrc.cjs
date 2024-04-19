/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import-no-duplicates-prefix-resolved-path'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'import/no-named-as-default': 0,
				'import/no-named-as-default-member': 0
			}
		}
	],
	globals: {
		NodeJS: true
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.cjs', '.js', '.ts']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	rules: {
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
		'import/prefer-default-export': 0,
		'no-param-reassign': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-mutable-exports': 0,
		'import/no-duplicates': 0,
		'import-no-duplicates-prefix-resolved-path/no-duplicates': [
			'error',
			{
				prefixResolvedPathWithImportName: true
			}
		],
		'no-restricted-imports': ['error', { paths: ['$env/static/private'] }],
		'no-self-assign': 0,
		'@typescript-eslint/no-throw-literal': 0
	}
};
