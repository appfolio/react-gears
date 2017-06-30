import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import css from 'modular-css-rollup';
import scssSyntax from 'postcss-scss';


// `require` understands JSON
const packageJSON = require('./package.json');
const dependencies = Object.keys(packageJSON.dependencies);

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

const config = {
  sourceMap: true,
  moduleName: 'ReactGears',
  entry: 'src/index.js',
  exports: 'named',
  plugins: [
    css({
      ext: '.scss',
      parser: scssSyntax,
      css: 'dist/reactgears.css',
    }),
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
