const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loader: 'style-loader!dts-css-modules-loader?namedExport!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
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
