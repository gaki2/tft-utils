module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      plugins: ['vitest'],
      files: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      extends: ['plugin:vitest/recommended'],
    },
  ],
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['*.js', '*.json', '*.svg', 'plopfile.js', '*.mjs'],
};
