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
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    reactstrap: 'reactstrap',
    'react-addons-css-transition-group': 'react-addons-css-transition-group',
    'react-addons-transition-group': 'react-addons-transition-group'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    library: 'ReactGears',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'
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
