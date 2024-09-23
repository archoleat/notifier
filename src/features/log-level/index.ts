import chalk from 'chalk';

import { LOG_LEVELS } from '#shared';

import { notificationGenerator } from '#generators';

import type { Parameters } from './parameters.ts';

const logLevel = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const notification = await notificationGenerator({ message, title, hasTime });

  if (title === LOG_LEVELS.ERROR) {
    return console.error(chalk.red(notification));
  }

  if (title === LOG_LEVELS.WARNING) {
    return console.warn(chalk.yellow(notification));
  }

  if (title === LOG_LEVELS.SUCCESS) {
    return console.log(chalk.green(notification));
  }

  return console.info(chalk.blue(notification));
};

export { logLevel };
