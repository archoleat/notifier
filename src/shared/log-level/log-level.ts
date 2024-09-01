import chalk from 'chalk';

import { LOG_LEVELS } from '#constants/log-levels.ts';

import { notificationGenerator } from '#generators/notification/notification.ts';

import type { Parameters } from './parameters.ts';

/**
 * This asynchronous function logs messages with different colors based
 * on the specified title.
 *
 * @param {string} message -
 *
 * @param {string} title -
 *
 * @param {boolean} hasTime -
 *
 * @returns The `logLevel` function returns different console
 * outputs based on the `title` parameter provided in the `parameters` object.
 */
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
