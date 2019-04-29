import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser'

const config = require( './package' );

const banner =
  '/*!\n' +
  ' * AppDownload v' + config.version + '\n' +
  ' * last update: ' + (new Date()).toLocaleDateString() + ', author: michael\n' +
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
    terser(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output: [
  {
    name: 'michael',
    file: './dist/bundle.js',
    format: 'umd',
    banner: banner
  },
  {
    file: './dist/bundle.esm.js',
    format: 'esm',
    banner: banner
  }
  ],
};