module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
     // suppress errors for missing 'import React' in files
   "react/react-in-jsx-scope": "off",
   // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], 
    "react/function-component-definition": [2, { namedComponents: "arrow-function", unamedComponents: "arrow-function" }],
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-param-reassign": 0,
    "no-unused-expressions": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
