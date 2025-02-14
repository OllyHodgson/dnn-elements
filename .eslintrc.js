module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": [
      "plugin:@stencil/recommended",
      "plugin:storybook/recommended",
    ],
    "rules": {
      "react/jsx-no-bind": "off",
      "no-console": "warn"
    }
  }