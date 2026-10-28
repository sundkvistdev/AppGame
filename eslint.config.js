import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	{
		ignores: ["dist/**", "node_modules/**", "coverage/**"],
	},
	{
		files: ["src/**/*.{js,mjs,cjs,ts,mts,cts}"],
		extends: [
			js.configs.recommended,
			tseslint.configs.strict,
			tseslint.configs.stylistic,
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
		],
		plugins: {
			"@stylistic": stylistic,
		},
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: globals.browser,
			parserOptions: {
				projectService: true
			},
		},
		rules: {
			"eqeqeq": ["error", "always"],
			"no-console": "error",
			"no-debugger": "error",
			"no-eval": "error",
			"no-fallthrough": "error",
			"no-implicit-coercion": "error",
			"no-unreachable": "error",
			"no-unsafe-optional-chaining": "error",
			"prefer-const": "error",
			"@stylistic/indent": ["error", "tab", {
				SwitchCase: 1,
			}],
			"@stylistic/quotes": ["error", "double", {
				avoidEscape: false,
				allowTemplateLiterals: "never",
				ignoreStringLiterals: false,
			}],
			"@stylistic/no-tabs": "off",
			"@stylistic/semi": ["error", "always"],
			"@stylistic/eol-last": ["error", "always"],
			"@stylistic/no-trailing-spaces": "error",
			"@stylistic/comma-dangle": ["error", "always-multiline"],
			"@stylistic/object-curly-spacing": ["error", "always"],
			"@stylistic/array-bracket-spacing": ["error", "never"],
			"@stylistic/keyword-spacing": "error",
			"@stylistic/space-before-blocks": ["error", "always"],
			"@stylistic/arrow-spacing": ["error", {
				before: true,
				after: true,
			}],
		},
	},
);