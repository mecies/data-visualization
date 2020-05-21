module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@vue/airbnb', 'plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': [2, 'as-needed'],
    semi: ['error', 'never']
  }
}
