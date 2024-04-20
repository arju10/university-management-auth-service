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
]
