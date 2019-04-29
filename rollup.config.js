import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const config = require( './package' );

const banner =
  '/*!\n' +
  ' * AppDownload v' + config.version + '\n' +
  ' * last update: ' + (new Date()).toLocaleDateString() + ', author: skeetershi\n' +
  ' * Released under the MIT License.\n' +
  ' */'

export default {
  input: 'index.js',
  plugins: [
    resolve(
      {customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output: [
  {
    name: 'michael',
    file: './dist/bundle.js',
    format: 'umd'
  },
  {
    file: './dist/bundle.esm.js',
    format: 'esm'
  }
  ],
  banner
};