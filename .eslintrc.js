module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 0,
    'no-extra-parens': 1,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'func-call-spacing': [2, 'never'],
    'no-unneeded-ternary': 2,
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'no-var': 2,
    indent: [2, 2],
    'space-in-parens': [2, 'never'],
    'no-console': 0,
    'comma-spacing': 2,
    'computed-property-spacing': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'no-new': 0,
    'no-unused-vars': 1,
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignores: ['div', 'pre', 'textarea'],
      },
    ],
  },
}
