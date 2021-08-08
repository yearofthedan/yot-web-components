// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  exclude: [
    '**/__tests__/**/*'
  ],
  plugins: ['@snowpack/plugin-typescript'],
  packageOptions: {
    source: 'local'
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'dist'
  },
  root: 'src'
};
