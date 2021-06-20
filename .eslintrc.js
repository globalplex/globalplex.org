module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/prop-types": "off",
  },
};
