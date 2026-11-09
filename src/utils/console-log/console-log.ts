import chalk from 'chalk';

import { notification } from '#utils/notification/notification.js';

import type { Parameters } from './parameters.ts';

const consoleLog = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const info = await notification({ message, title, hasTime });

  if (title === 'error') {
    return console.error(chalk.red(info));
  }

  if (title === 'warning') {
    return console.warn(chalk.yellow(info));
  }

  if (title === 'success') {
    return console.info(chalk.green(info));
  }

  return console.log(chalk.blue(info));
};

export { consoleLog };
