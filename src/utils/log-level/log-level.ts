import chalk from 'chalk';

import { LOG_LEVELS } from '#constants/log-levels.ts';
import { notificationGenerator } from '#generators/notification/notification.ts';

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
    return console.info(chalk.green(notification));
  }

  return console.log(chalk.blue(notification));
};

export { logLevel };
