import { playwrightLauncher } from '@web/test-runner-playwright';
import { visualRegressionPlugin } from '@web/test-runner-visual-regression/plugin';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: [
    'dist/**/*.test.js',
    'dist/**/*.spec.js',
    'src/__tests__/*.html'
  ],

  /** Confgure bare import resolve plugin */
  nodeResolve: {
    exportConditions: ['browser', 'development']
  },

  browsers: [
      playwrightLauncher({ product: 'webkit' }),
  ],

  plugins: [
    visualRegressionPlugin({
      update: process.argv.includes('--update-visual-baseline'),
    }),
  ]
});
