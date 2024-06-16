const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, './.aws-sam/build/HelloWorldFunction01'),
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/HelloWorldFunction01.ts',
      tsConfig: './tsconfig.app.json',
      optimization: false,
      outputHashing: 'none',
      externalDependencies: 'none',
      // module: 'commonjs',
    }),
  ],
};
