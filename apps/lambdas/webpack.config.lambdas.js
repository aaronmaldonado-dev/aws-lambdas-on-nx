const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    './apps/lambdas/src/myLambda01/index':
      './apps/lambdas/src/myLambda01/index.ts',
    // './apps/lambdas/src/myLambda02/index':
    //   './apps/lambdas/src/myLambda02/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './apps/lambdas/dist'),
    filename: '[name]/index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
