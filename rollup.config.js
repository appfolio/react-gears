import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import css from 'modular-css-rollup';
import scssSyntax from 'postcss-scss';
import sass from 'node-sass';
import packageImporter from 'node-sass-package-importer';

// `require` understands JSON
const packageJSON = require('./package.json');
const dependencies = Object.keys(packageJSON.dependencies).concat(
  Object.keys(packageJSON.peerDependencies));
const dateFnsRoot = 'date-fns/';

function isExternal(dependency) {
  if (dependencies.indexOf(dependency) !== -1) {
    return true;
  }

  if (dependency.substr(0, dateFnsRoot.length) === dateFnsRoot) {
    return true;
  }

  return false;
}

/**
 * Routes the output of modular CSS through SASS
 * before writing it to a file.
 */
function patchedModularCSS() {
  const plugin = css({
    ext: '.scss',
    parser: scssSyntax,
    css: 'dist/reactgears.css',
    exportGlobals: false,
  });

  const oldOnWrite = plugin.onwrite;
  plugin.onwrite = (bundle, result) => {
    const patchedResult = Object.assign({}, plugin, {
      css: result.css.then(data => {
        return {
          css: sass.renderSync({
            data: data.css,
            // To support Sass imports using ~
            importer: packageImporter()
          }).css.toString()
        };
      })
    });

    return oldOnWrite(bundle, patchedResult);
  };

  return plugin;
}

const config = {
  sourceMap: true,
  moduleName: 'ReactGears',
  entry: 'src/index.js',
  exports: 'named',
  plugins: [
    patchedModularCSS(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    nodeResolve(),
    commonjs(),
  ],
  external: isExternal,
  targets: [
    { dest: 'dist/reactgears.es.js', format: 'es' },
  ],
};

export default config;
