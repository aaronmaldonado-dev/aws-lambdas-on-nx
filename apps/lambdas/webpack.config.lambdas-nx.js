const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join, path } = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/apps/lambdas'),
    filename: 'index.js',
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.lambdas.json',
      optimization: false,
      outputHashing: 'none',
    }),
  ],
};
