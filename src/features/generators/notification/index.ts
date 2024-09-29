import chalk from 'chalk';

import { currentTime, truncate } from '#helpers';

import type { Parameters } from './parameters.ts';

const notificationGenerator = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const time = hasTime ? `${chalk.gray(await currentTime())} ` : '';
  const text = await truncate({ message });

  return `${time}[${title.toUpperCase()}] ${text}`;
};

export { notificationGenerator };
