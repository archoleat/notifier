import { elector } from '#shared';

import type { Parameters } from '#types';

/**
 * The asynchronous function `error` takes in parameters to display an
 * error message with optional time and notification mode settings.
 *
 * @param {Parameters} parameters - The `parameters` object in the `error` function contains the
 * following properties:
 *
 * @returns The `error` function is returning the result of calling the
 * `elector` asynchronous function with the provided parameters,
 * including `message`, `hasTime`, `notificationMode`, `icon`, and `title`.
 * The `icon` is set to 'error' and the `title` is set to 'ERROR'.
 */
const error = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'error',
    title: 'ERROR',
  });
};

export { error };
