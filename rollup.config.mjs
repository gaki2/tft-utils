import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild';
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from "rollup-plugin-commonjs";
import terser from '@rollup/plugin-terser';

const extensions = ['.tsx', 'ts', 'js', '.mjs'];

const esbuildConfig = esbuild({
  // All options are optional
  include: /\.[t]sx?$/,
  exclude: /node_modules/, // default
  sourceMap: true, // default
  minify: false,
  target: 'esnext', // default, or 'es20XX', 'esnext'
  jsx: 'automatic', // default, or 'preserve'
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  // Like @rollup/plugin-replace
  define: {
    __VERSION__: '"x.y.z"',
  },
  tsconfig: 'tsconfig.json', // default
  treeShaking: true,
  // Add extra loaders
  loaders: {
    // Add .json files support
    // require @rollup/plugin-commonjs
    '.json': 'json',
  },
});

/** @type {import('rollup').RollupOptions} */
const dtsConfig = {
  input: './src/index.ts',
  // watch 모드시 타입 파일도 생성하면 너무 느려서 일단 꺼둠
  watch: false,
  external: [/\.css$/u],
  output: {
    dir: 'lib/src',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'lib/src',
  },
  plugins: [dts()]
};

const Plugins = [commonjs(), peerDepsExternal(), esbuildConfig, terser()];

/** @type {import('rollup').RollupOptions} */
const commonjsConfig = {
  input: './src/index.ts',
  watch: {
    include: './src/**',
    exclude: 'node_modules/**',
    clearScreen: true,
  },
  output: {
    dir: 'lib/src',
    entryFileNames: '[name].cjs',
    preserveModules: true,
    preserveModulesRoot: 'lib',
    format: 'cjs',
    interop: 'auto',
  },
  plugins: [
    ...Plugins,
    nodeResolve({
      mainFields: ['main'],
      extensions,
    }),
  ],
};

/** @type {import('rollup').RollupOptions} */
const esmConfig = {
  input: './src/index.ts',
  watch: {
    include: './src/**',
    clearScreen: true,
    exclude: 'node_modules/**',
  },
  output: {
    dir: 'lib/src',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'lib',
    interop: 'esModule',
  },
  plugins: [
    ...Plugins,
    nodeResolve({
      extensions,
    }),
  ],
};

export default [ dtsConfig, commonjsConfig, esmConfig];