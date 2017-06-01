const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({ browsers: ['last 2 versions'] })
        ]
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
        include: path.resolve(__dirname, '../')
      }
    ],
  },
};
