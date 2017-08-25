const glob = require('glob');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

/**
 * Production webpack settings.
 */
const config = {
  devtool: 'source-map',
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
    library: 'xanthous',
    libraryTarget: 'umd',
    umdNamedDefine: true
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

/*
  Generate a config per file.
*/
const sourceRoot = path.resolve(__dirname, './src');
const getFileConfig = (file) => {
  const relativePath = path.relative(sourceRoot, file);
  const parts = path.parse(relativePath);
  const chunkName = path.join(parts.dir, parts.name);

  return {
    context: sourceRoot,
    devtool: 'source-map',
    entry: {
      [chunkName]: file,
    },
    externals: [
      function(context, request, callback) {
        if (
          context.indexOf('node_modules') !== -1 || // inline node modules (style-loader stuff)
          request.indexOf('.scss') !== -1 || // inline SCSS files
          request == file // inline the entry point
        ) {
          return callback();
        }
        return callback(null, 'commonjs ' + request);
      }
    ],
    output: {
      path: path.resolve(__dirname, './lib'),
      filename: '[name].js',
    },
    module: config.module,
    plugins: config.plugins,
  };
}

const configs = glob.sync(`${sourceRoot}/**/*.js`).map(getFileConfig)

configs.push(config)

module.exports = configs;
