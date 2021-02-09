const path = require('path');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:ramda/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'ramda',
    'import',
    'promise',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-console': 'warn',
    'react/no-danger': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    indent: ['error', 2],
  },
};
