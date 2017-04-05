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
    "key-spacing": 0,
    "object-curly-spacing": 0,
    "space-infix-ops": 0,
    "no-var": 0,
    "no-console": 0,
    "no-debugger": 0,
    "camelcase": 0,
    "keyword-spacing": 0,
    "no-multiple-empty-lines": 0,
    "space-before-function-paren": 0,
    "object-shorthand": 0,
    "space-before-blocks": 0,
    "spaced-comment": 0,
    "arrow-parens": 0,
    "no-unused-vars": 0,
    "quotes": 0,
    "comma-spacing": 0,
    "ember-suave/no-const-outside-module-scope": 0,
    "ember-suave/no-direct-property-access": 0,
    "no-undef": 0,
    "strict": 0,
    'babel/arrow-parens': 0,
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