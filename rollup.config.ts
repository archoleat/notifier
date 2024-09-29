import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';

const destinationFolder = 'dist';
const sourceFolder = 'src';

const appFolder = `${sourceFolder}/app`;
const featuresFolder = `${sourceFolder}/features`;
const iconsFolder = `${sourceFolder}/icons`;
const sharedFolder = `${sourceFolder}/shared`;

const generatorsFolder = `${featuresFolder}/generators`;
const helpersFolder = `${featuresFolder}/helpers`;

const fileFormat = 'es';
const fileName = 'index';

const declarationFile = `${fileName}.d.ts`;
const entryFile = `${fileName}.ts`;
const outputFile = `${fileName}.js`;

export default defineConfig([
  {
    external: ['chalk', 'node-notifier'],
    plugins: [
      copy({
        targets: [{ src: iconsFolder, dest: destinationFolder }],
      }),
      typescript(),
      minify(),
    ],
    input: `${sourceFolder}/${entryFile}`,
    output: {
      file: `${destinationFolder}/${outputFile}`,
      format: fileFormat,
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#app',
            replacement: resolve(`${appFolder}/${entryFile}`),
          },
          {
            find: '#features',
            replacement: resolve(`${featuresFolder}/${entryFile}`),
          },
          {
            find: '#generators',
            replacement: resolve(`${generatorsFolder}/${entryFile}`),
          },
          {
            find: '#helpers',
            replacement: resolve(`${helpersFolder}/${entryFile}`),
          },
          {
            find: '#shared',
            replacement: resolve(`${sharedFolder}/${entryFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${entryFile}`,
    output: {
      file: `${destinationFolder}/${declarationFile}`,
      format: fileFormat,
    },
  },
]);
