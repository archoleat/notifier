import chalk from 'chalk';

import { currentTime } from '#helpers/current-time.ts';
import { truncate } from '#helpers/truncate/truncate.ts';

import type { Parameters } from './parameters.ts';

const notification = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const timestamp = hasTime ? `${chalk.gray(await currentTime())} ` : '';
  const upperCaseTitle = title.toUpperCase();
  const text = await truncate({ message });

  return `${timestamp}[${upperCaseTitle}] ${text}`;
};

export { notification };
