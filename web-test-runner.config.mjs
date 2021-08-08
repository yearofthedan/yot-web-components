import { playwrightLauncher } from '@web/test-runner-playwright';
import { visualRegressionPlugin } from '@web/test-runner-visual-regression/plugin';

const unitTests = [
  'build/**/*.test.js',
  'build/**/*.spec.js',
]

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: process.env.CI === "true" ? unitTests : [...unitTests, 'src/__tests__/*.html'],

  /** Confgure bare import resolve plugin */
  nodeResolve: {
    exportConditions: ['browser', 'development']
  },

  browsers: [
      playwrightLauncher({ product: 'chromium' }),
  ],

  plugins: [
    visualRegressionPlugin({
      diffOptions: {
        threshold: 0.3,
        includeAA: true,
      },
      update: process.argv.includes('--update-visual-baseline'),
    }),
  ]
});
