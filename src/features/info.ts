import { messageGenerator } from '#shared';

import type { Parameters } from '#types';

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
 * `messageGenerator` asynchronous function with the provided parameters
 * and additional properties `icon` and `title`.
 */
const info = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const label = 'info';

  return messageGenerator({
    message,
    hasTime,
    notificationMode,
    icon: label,
    title: label,
  });
};

export { info };
