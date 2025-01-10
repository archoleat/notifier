import chalk from 'chalk';

import { LOG_LEVELS } from '#constants/log-levels.ts';
import { notification } from '#utils/notification/notification.ts';

import type { Parameters } from './parameters.ts';

const consoleLog = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const info = await notification({ message, title, hasTime });

  if (title === LOG_LEVELS.ERROR) {
    return console.error(chalk.red(info));
  }

  if (title === LOG_LEVELS.WARNING) {
    return console.warn(chalk.yellow(info));
  }

  if (title === LOG_LEVELS.SUCCESS) {
    return console.info(chalk.green(info));
  }

  return console.log(chalk.blue(info));
};

export { consoleLog };
