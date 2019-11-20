const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

const packageJson = require('./package.json');

/**
 * Production webpack settings.
 */
const config = {
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
    (context, request, callback) => {
      if (['reactstrap', 'date-fns'].some(check => request.indexOf(check) !== -1)) {
        // Keep it as commonjs require.
        return callback(null, `commonjs ${request}`);
      }
      // Inline it.
      return callback();
    }
  ],
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          cacheDirectory: true,
        }
      },
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
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};

/*
  Generate a config per file.
*/
const sourceRoot = path.resolve(__dirname, './src');
const indexJs = path.resolve(sourceRoot, 'index.js');
const files = {};
glob.sync(`${sourceRoot}/**/*.{js,ts,tsx}`, { ignore: [`${sourceRoot}/**/*d.ts`] }).forEach((file) => {
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
    (context, request, callback) => {
      if (debugInternalExternal) {
        console.log('context', context);
        console.log('request', request);
      }
      if (
        context.indexOf('node_modules') !== -1 || // inline node modules (style-loader stuff)
        request.indexOf('node_modules') !== -1 || // inline node modules (style-loader stuff)
        request.indexOf('.scss') !== -1 || // inline SCSS files
        context === sourceRoot // inline the entry point
      ) {
        // Inline it.
        if (debugInternalExternal) console.log('internal\n');
        return callback();
      }
      // Keep it as commonjs require.
      if (debugInternalExternal) console.log('external\n');
      return callback(null, `commonjs ${request}`);
    }
  ],
  // The output has the same path as the input, just under the lib dir.
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  // Use the same loaders and plugins as the original config.
  module: config.module,
  plugins: config.plugins,
};

module.exports = [config, fileConfigs];
