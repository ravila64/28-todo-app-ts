module.exports = {
  env: { 
    browser: true, 
    es2021: true 
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
  ],
  overrides:[
  ],
  parserOptions:{
    ecmaVersion: 'latest',
    sourceType: 'module',
    project:'./tsconfig.json'
  },
  //ignorePatterns: ['dist', '.eslintrc.cjs'],
  //parser: '@typescript-eslint/parser',
  plugins: [
    'react'
    //'react-refresh'
  ],
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    'react/react-in-jsx-scope': "off"
    }
}
