import { playwrightLauncher } from '@web/test-runner-playwright';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: [
    'dist/**/*.test.js',
    'dist/**/*.spec.js'
  ],

  /** Confgure bare import resolve plugin */
  nodeResolve: {
    exportConditions: ['browser', 'development']
  },

  browsers: [
      playwrightLauncher({ product: 'webkit' }),
  ],
});
