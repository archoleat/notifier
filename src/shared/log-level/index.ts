import chalk from 'chalk';

import { currentTime } from '../current-time.ts';
import { truncate } from '../truncate/index.ts';

import type { Parameters } from './parameters.d.ts';

const logLevel = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const generateNotification = async () => {
    const time = hasTime ? `${chalk.white(await currentTime())} ` : '';
    const body = await truncate({ message });

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
