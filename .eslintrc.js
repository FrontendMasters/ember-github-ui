module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  indent: ['error', 2],
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    'browser': true
  },
  plugins: ['babel', 'promise'],
  rules: {
    "strict": 0,
    'babel/arrow-parens': 1,
    'no-fallthrough': 0,
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn"
  }
};