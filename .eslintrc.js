module.exports = {
  root: true,
  extends: ['@payloadcms'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['src/scripts/*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        'no-console': 'off',
      },
    },
  ],
}
