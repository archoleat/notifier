import { elector } from '#shared';

import type { Parameters } from '#types';

/**
 * The function `warning` is an asynchronous function that displays
 * a warning message with optional parameters for time and notification mode.
 *
 * @param {Parameters} parameters - It seems like you forgot to provide the details of the parameters.
 * Could you please provide the details of the parameters that are expected by the `warning` function?
 *
 * @returns The `warning` function is returning the result of calling the
 * `elector` asynchronous function with the provided parameters,
 * including `message`, `hasTime`, `notificationMode`, `icon`, and `title`.
 * The `icon` is set to 'warning' and the `title` is set to 'WARNING'.
 */
const warning = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'warning',
    title: 'WARNING',
  });
};

export { warning };
