module.exports = {
  root: true,
  env: {
    es2021: true,
    es6: true,

    jest: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'prettier',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'simple-import-sort',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
  },
  rules: {
    // 'prettier/prettier': 'error',
    indent: 0,
    camelcase: 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'multiline-ternary': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
