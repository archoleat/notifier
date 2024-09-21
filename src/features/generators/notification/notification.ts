import chalk from 'chalk';

import { currentTime, truncate } from '#helpers';

import type { Parameters } from './parameters.ts';

/**
 * Generates a notification message.
 *
 * @param {string} message - The main message content of the notification.
 *
 * @param {string} title - The title of the notification.
 *
 * @param {boolean} hasTime - Indicates if the notification includes a timestamp.
 *
 * @return {string} - The formatted notification message with optional
 * timestamp, title, and optional truncated body.
 */
const notificationGenerator = async (parameters: Parameters) => {
  const { message, title, hasTime } = parameters;

  const time = hasTime ? `${chalk.gray(await currentTime())} ` : '';
  const body = await truncate({ message });

  return `${time}[${title.toUpperCase()}] ${body}`;
};

export { notificationGenerator };
