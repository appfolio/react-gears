const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const packageJson = require('./package.json');

/**
 * Production webpack settings.
 */
module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, './src/index')
  ],
  externals: [
    // Externalize all packages that are peerDependencies
    ...Object.keys(packageJson.peerDependencies),
    // Externalize all packages that are dependencies. They get installed during installation
    // of this package and externalizing will keep them as ie require('fecha'), which will
    // still resolve.
    ...Object.keys(packageJson.dependencies),
    // Externalize all the subimports from reactstrap and date-fns
    function(context, request, callback) {
      if (['reactstrap', 'date-fns'].some(check => request.indexOf(check) !== -1)) {
        // Keep it as commonjs require.
        return callback(null, 'commonjs ' + request);
      }
      // Inline it.
      return callback();
    }
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
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
      sourceMap: true,
      compressor: {
        warnings: false
      }
    })
  ]
};
