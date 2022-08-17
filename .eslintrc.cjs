const isProduction = process.env.NODE_ENV === 'production'

module.exports = exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': [isProduction ? 'error' : 'warn'],
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': [isProduction ? 'error' : 'warn'],
    'vue/no-unused-vars': [isProduction ? 'error' : 'warn'],
    'vue/no-v-html': 'off',
    'vue/no-reserved-component-names': 'off',
  },
}