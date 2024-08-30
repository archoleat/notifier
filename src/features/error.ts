import { messageGenerator } from '#shared/message-generator/message-generator.ts';

import type { Parameters } from '#types/parameters.ts';

/**
 * The asynchronous function `error` takes in parameters to display an
 * error message with optional time and notification mode settings.
 *
 * @param {string} message -
 *
 * @param {boolean} hasTime -
 *
 * @param {'console' | 'desktop' | 'multiple'} notificationMode -
 *
 * @returns The `error` function is returning the result of calling the
 * `messageGenerator` asynchronous function with the provided parameters,
 * including `message`, `hasTime`, `notificationMode`, `icon`, and `title`.
 * The `icon` is set to 'error' and the `title` is set to 'ERROR'.
 */
const error = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const label = 'error';

  return messageGenerator({
    message,
    hasTime,
    notificationMode,
    icon: label,
    title: label,
  });
};

export { error };
