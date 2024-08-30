import { LOG_LEVELS } from '#constants/log-levels.ts';

import { splitter } from '#helpers/splitter/splitter.ts';

import type { Parameters } from '#types/parameters.ts';

/**
 * The `info` asynchronous function displays an information
 * message with optional time and notification mode parameters.
 *
 * @param {string} message -
 *
 * @param {boolean} hasTime -
 *
 * @param {'console' | 'desktop' | 'multiple'} notificationMode -
 *
 * @returns The `info` function is returning the result of calling the
 * `splitter` asynchronous function with the provided parameters
 * and additional properties `icon` and `title`.
 */
const info = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const LABEL = LOG_LEVELS.INFO;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: LABEL,
    title: LABEL,
  });
};

export { info };
