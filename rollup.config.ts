import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const featuresFolder = `${sourceFolder}/features`;
const sharedFolder = `${sourceFolder}/shared`;
const typesFolder = `${sharedFolder}/types`;

const fileName = 'index';
const indexFile = `${fileName}.ts`;
const declarationFile = `${fileName}.d.ts`;
const outputFile = `${fileName}.js`;

const fileFormat = 'es';

export default defineConfig([
  {
    external: ['chalk', 'node-notifier'],
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: outputFile,
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
            replacement: resolve(`${sharedFolder}/${declarationFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
