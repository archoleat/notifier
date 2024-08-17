import { elector } from '#shared';

import type { Parameters } from '#types';

/**
 * The function `success` is an asynchronous function that takes in parameters
 * and returns a notification with a success message.
 *
 * @param {string} message -
 *
 * @param {boolean} hasTime -
 *
 * @param {'console' | 'desktop' | 'multiple'} notificationMode -
 *
 * @returns The `success` function is returning the result of calling the
 * `elector` asynchronous function with the provided parameters,
 * including `message`, `hasTime`, `notificationMode`, `icon`, and `title`.
 * The `icon` is set to 'success' and the `title` is set to 'SUCCESS'.
 */
const success = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'success',
    title: 'SUCCESS',
  });
};

export { success };
