import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';

const destinationFolder = 'dist';
const sourceFolder = 'src';
const sharedFolder = `${sourceFolder}/shared`;
const helpersFolder = `${sharedFolder}/helpers`;
const iconsFolder = `${sourceFolder}/icons`;
const typesFolder = `${sharedFolder}/types`;

const fileFormat = 'es';
const entryFileName = 'app';
const outputFileName = 'index';

const declarationFile = `${outputFileName}.d.ts`;
const entryFile = `${entryFileName}.ts`;
const outputFile = `${outputFileName}.js`;

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
            find: '#shared',
            replacement: resolve(sharedFolder),
          },
          {
            find: '#helpers',
            replacement: resolve(helpersFolder),
          },
          {
            find: '#types',
            replacement: resolve(typesFolder),
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
