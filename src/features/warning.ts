import { messageGenerator } from '#shared/message-generator/message-generator.ts';

import type { Parameters } from '#types/parameters.ts';

/**
 * The function `warning` is an asynchronous function that displays
 * a warning message with optional parameters for time and notification mode.
 *
 * @param {string} message -
 *
 * @param {boolean} hasTime -
 *
 * @param {'console' | 'desktop' | 'multiple'} notificationMode -
 *
 * @returns The `warning` function is returning the result of calling the
 * `messageGenerator` asynchronous function with the provided parameters,
 * including `message`, `hasTime`, `notificationMode`, `icon`, and `title`.
 * The `icon` is set to 'warning' and the `title` is set to 'WARNING'.
 */
const warning = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const label = 'warning';

  return messageGenerator({
    message,
    hasTime,
    notificationMode,
    icon: label,
    title: label,
  });
};

export { warning };
