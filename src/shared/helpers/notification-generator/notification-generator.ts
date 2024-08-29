import chalk from 'chalk';

import { currentTime } from '../current-time.ts';
import { truncate } from '../truncate/truncate.ts';

import type { Parameters } from './parameters.ts';

const notificationGenerator = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const time = hasTime ? `${chalk.white(await currentTime())} ` : '';
  const body = await truncate({ message });

  return `${time}[${title.toUpperCase()}] ${body}`;
};

export { notificationGenerator };
