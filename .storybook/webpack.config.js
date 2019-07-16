const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'react-docgen-typescript-loader'
          },
        ]
      },
      {
        test: /\.[jt]sx?$/,
        include: [
          path.resolve(__dirname, '../stories')
        ],
        loader: '@storybook/addon-storysource/loader',
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
