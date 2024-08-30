import chalk from 'chalk';

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

  if (title === 'error') {
    return console.error(chalk.red(notification));
  }

  if (title === 'warning') {
    return console.warn(chalk.yellow(notification));
  }

  if (title === 'success') {
    return console.log(chalk.green(notification));
  }

  if (title === 'info') {
    return console.info(chalk.blue(notification));
  }

  return console.log(chalk.gray(notification));
};

export { logLevel };
