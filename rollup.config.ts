import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';
import { resolve } from 'node:path';
import alias from '@rollup/plugin-alias';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';

const destinationFolder = 'dist';
const sourceFolder = 'src';
const configFolder = `${sourceFolder}/config`;
const utilsFolder = `${sourceFolder}/utils`;
const iconsFolder = `${sourceFolder}/icons`;
const dataFolder = `${sourceFolder}/data`;
const generatorsFolder = `${dataFolder}/generators`;
const helpersFolder = `${dataFolder}/helpers`;
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
            find: '#config',
            replacement: resolve(`${configFolder}/${entryFile}`),
          },
          {
            find: '#utils',
            replacement: resolve(`${utilsFolder}/${entryFile}`),
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
            find: '#data',
            replacement: resolve(`${dataFolder}/${entryFile}`),
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
