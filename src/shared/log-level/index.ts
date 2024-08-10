import chalk from 'chalk';

import { currentTime } from '../current-time.ts';
import { maxMessageLength } from '../max-message-length/index.ts';

import type { Parameters } from './parameters.d.ts';

const logLevel = async (parameters: Parameters) => {
  const { message, title, hasTime, messageLength = 80 } = parameters;

  const notification = `${hasTime ? `${chalk.white(currentTime())} ` : ''}[${title}] ${maxMessageLength({ message, messageLength })}`;

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
};

export { logLevel };
