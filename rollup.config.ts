import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';

const destinationFolder = 'dist';
const sourceFolder = 'src';
const featuresFolder = `${sourceFolder}/features`;
const iconsFolder = `${sourceFolder}/icons`;
const sharedFolder = `${sourceFolder}/shared`;
const typesFolder = `${sharedFolder}/types`;

const fileFormat = 'es';
const fileName = 'index';

const declarationFile = `${fileName}.d.ts`;
const indexFile = `${fileName}.ts`;
const outputFile = `${fileName}.js`;

export default defineConfig([
  {
    external: ['chalk', 'node-notifier'],
    plugins: [
      copy({
        targets: [{ src: `${iconsFolder}/*`, dest: `${destinationFolder}/icons` }],
      }),
      typescript(),
      minify(),
    ],
    input: `${sourceFolder}/${indexFile}`,
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
            find: '#features',
            replacement: resolve(`${featuresFolder}/${indexFile}`),
          },
          {
            find: '#shared',
            replacement: resolve(`${sharedFolder}/${indexFile}`),
          },
          {
            find: '#types',
            replacement: resolve(`${typesFolder}/${declarationFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: `${destinationFolder}/${declarationFile}`,
      format: fileFormat,
    },
  },
]);
