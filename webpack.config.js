const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

/**
 * Production webpack settings.
 */
module.exports = {
  entry: [
    path.resolve(__dirname, './src/index')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    library: 'xanthous',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react', 'stage-1', 'stage-2'],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style!css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({ browsers: ['last 2 versions'] })
        ]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
