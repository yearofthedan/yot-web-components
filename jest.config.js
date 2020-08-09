module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  transformIgnorePatterns: [
    'node_modules/(?!(testing-library__dom|@open-wc|lit-html|lit-element|pure-lit|lit-element-state-decoupler)/)',
  ],
  setupFilesAfterEnv: ['./src/test-setup/setup.ts'],
};
