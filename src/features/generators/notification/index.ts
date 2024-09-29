import chalk from 'chalk';

import { currentTime, truncate } from '#helpers';

import type { Parameters } from './parameters.ts';

const notificationGenerator = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const timestamp = hasTime ? `${chalk.gray(await currentTime())} ` : '';
  const upperCaseTitle = title.toUpperCase();
  const text = await truncate({ message });

  return `${timestamp}[${upperCaseTitle}] ${text}`;
};

export { notificationGenerator };
