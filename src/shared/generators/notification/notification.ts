import chalk from 'chalk';

import { currentTime } from '#helpers/current-time.ts';
import { truncate } from '#helpers/truncate/truncate.ts';

import type { Parameters } from './parameters.ts';

const notificationGenerator = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const time = hasTime ? `${chalk.gray(await currentTime())} ` : '';
  const body = await truncate({ message });

  return `${time}[${title.toUpperCase()}] ${body}`;
};

export { notificationGenerator };
