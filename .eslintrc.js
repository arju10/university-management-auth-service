module.exports = [
  {
    files: ['*.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'off',
      // Add your custom rules here
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'], // enforce semicolons
      semi: ['error', 'always'], // enforce semicolons
      'linebreak-style': ['error', 'unix'], // enforce Unix linebreak style
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // disallow empty functions, except arrow functions
      'object-curly-spacing': ['error', 'always'], // enforce spacing inside object curly braces
      'comma-dangle': ['error', 'always-multiline'], // enforce trailing commas in multi-line objects and arrays
      'no-unused-vars': 'error', // enforce no unused variables
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    globals: {
      process: 'readonly',
    },
  },
];
