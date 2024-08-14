import chalk from 'chalk';

import { currentTime } from '../current-time.ts';
import { maxMessageLength } from '../max-message-length/index.ts';

import type { Parameters } from './parameters.d.ts';

const logLevel = async (parameters: Parameters) => {
  const { message, title, hasTime, messageLength = 80 } = parameters;

  const generateNotification = async () => {
    const time = hasTime ? `${chalk.white(await currentTime())} ` : '';
    const body = await maxMessageLength({ message, messageLength });

    return `${time}[${title}] ${body}`;
  };

  if (title === 'ERROR') {
    return console.error(chalk.red(await generateNotification()));
  }

  if (title === 'WARNING') {
    return console.warn(chalk.yellow(await generateNotification()));
  }

  if (title === 'SUCCESS') {
    return console.log(chalk.green(await generateNotification()));
  }

  return console.info(chalk.blue(await generateNotification()));
};

export { logLevel };
