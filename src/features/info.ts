import { elector } from '#shared';

import type { Parameters } from '#types';

/**
 * The `info` asynchronous function displays an information
 * message with optional time and notification mode parameters.
 *
 * @param {Parameters} parameters - The `parameters` object in the `info` function includes the
 * following properties:
 *
 * @returns The `info` function is returning the result of calling the
 * `elector` asynchronous function with the provided parameters
 * and additional properties `icon` and `title`.
 */
const info = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'info',
    title: 'INFO',
  });
};

export { info };
