import { LOG_LEVELS } from '#constants/log-levels.ts';

import { splitter } from '#helpers/splitter/splitter.ts';

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
 * `splitter` asynchronous function with the provided parameters,
 * including `message`, `hasTime`, `notificationMode`, `icon`, and `title`.
 * The `icon` is set to 'error' and the `title` is set to 'ERROR'.
 */
const error = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const LABEL = LOG_LEVELS.ERROR;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: LABEL,
    title: LABEL,
  });
};

export { error };
