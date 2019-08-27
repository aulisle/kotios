module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": ["error", { semi: false, singleQuote: true }]
  },
  globals: {}
}
