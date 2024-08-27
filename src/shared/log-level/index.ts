import chalk from 'chalk';

import { currentTime } from '../current-time.ts';
import { truncate } from '../truncate/index.ts';

import type { Parameters } from './parameters.d.ts';

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

  const generateNotification = async () => {
    const time = hasTime ? `${chalk.white(await currentTime())} ` : '';
    const body = await truncate({ message });

    return `${time}[${title}] ${body}`;
  };

  const notification = await generateNotification();

  if (title === 'ERROR') {
    return console.error(chalk.red(notification));
  }

  if (title === 'WARNING') {
    return console.warn(chalk.yellow(notification));
  }

  if (title === 'SUCCESS') {
    return console.log(chalk.green(notification));
  }

  if (title === 'INFO') {
    return console.info(chalk.blue(notification));
  }

  return console.log(chalk.gray(notification));
};

export { logLevel };
