import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

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
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    nodeResolve(),
    commonjs(),
    // Rollup plugin that replaces scss imports with empty files.
    {
      load(id) {
        return path.extname(id) === '.scss' ? 'export default {}' : null;
      }
    },
  ],
  external: isExternal,
  targets: [
    { dest: 'dist/reactgears.es.js', format: 'es' },
  ],
};

export default config;
