const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },


    rules: {
  "no-console": "warn",
  "no-unused-vars": "warn",
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/no-require-imports": "off",
  "semi": ["error", "always"],  // ✅ add this
}


  }
];