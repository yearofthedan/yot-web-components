const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'jest-puppeteer',
  testRegex: '(/browser-tests/.*\\.(test|spec))\\.(ts|tsx)$',
  transform: {
    ...tsjPreset.transform,
  },
  setupFilesAfterEnv: [
    '@wordpress/jest-puppeteer-axe',
    './test-setup/setup.ts',
  ],
  globals: {
    BASE_URL: 'http://localhost:4444/storybook-static/iframe.html',
  },
};
