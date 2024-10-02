import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import mocha from "eslint-plugin-mocha";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["dist/**", "docs/types/**", ".*"],
  },
  {
    languageOptions: { globals: { ...globals.node } },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  mocha.configs.flat.recommended,
  prettier,
  {
    rules: {
      "mocha/no-setup-in-describe": "off",
    },
  },
];
