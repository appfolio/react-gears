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
const indexJs = path.resolve(sourceRoot, 'index.js');
const files = {};
glob.sync(`${sourceRoot}/**/*.js`).forEach(file => {
  if (file === indexJs) return;
  const relativePath = path.relative(sourceRoot, file);
  const parts = path.parse(relativePath);
  const chunkName = path.join(parts.dir, parts.name);
  files[chunkName] = file;
});
const debugInternalExternal = false;
const fileConfigs = {
  context: sourceRoot,
  devtool: 'source-map',
  entry: files,
  // When transpiling individual files, we only want to include the file itself and
  // the component stylesheet if it uses one.
  externals: [
    function(context, request, callback) {
      if (debugInternalExternal) {
        console.log('context', context)
        console.log('request', request)
      }
      if (
        context.indexOf('node_modules') !== -1 || // inline node modules (style-loader stuff)
        request.indexOf('node_modules') !== -1 || // inline node modules (style-loader stuff)
        request.indexOf('.scss') !== -1 || // inline SCSS files
        context === sourceRoot // inline the entry point
      ) {
        // Inline it.
        if (debugInternalExternal) console.log('internal\n')
        return callback();
      }
      // Keep it as commonjs require.
      if (debugInternalExternal) console.log('external\n')
      return callback(null, 'commonjs ' + request);
    }
  ],
  // The output has the same path as the input, just under the lib dir.
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js',
  },
  // Use the same loaders and plugins as the original config.
  module: config.module,
  plugins: config.plugins,
}

module.exports = [config, fileConfigs];
