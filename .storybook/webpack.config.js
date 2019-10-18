const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'dts-css-modules-loader',
            options: {
              namedExport: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCaseOnly',
              importLoaders: 2
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              "useBabel": true,
              "babelOptions": {
                "babelrc": true
              },
              "babelCore": "@babel/core", // needed for Babel v7
            }
          },
          {
            loader: 'react-docgen-typescript-loader',
            options: {
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
            }
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
