import { messageGenerator } from '#shared';

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
 * `messageGenerator` asynchronous function with the provided parameters,
 * including `message`, `hasTime`, `notificationMode`, `icon`, and `title`.
 * The `icon` is set to 'success' and the `title` is set to 'SUCCESS'.
 */
const success = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const label = 'success';

  return messageGenerator({
    message,
    hasTime,
    notificationMode,
    icon: label,
    title: label,
  });
};

export { success };
