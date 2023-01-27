module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'ignorePackages',
      },
    ],
    'no-unused-vars': ['warn'],
  },
};
