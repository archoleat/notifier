import { LOG_LEVELS } from '#constants/log-levels.ts';

import { splitter } from '#helpers/splitter/splitter.ts';

import type { Parameters } from '#types/parameters.ts';

/**
 * Handles an error.
 *
 * @param {string} message - The error message.
 *
 * @param {boolean} [hasTime=true] - Indicates if the error has a timestamp.
 *
 * @param {string} [notificationMode='console'] - The notification mode
 * for the error.
 *
 * @return {Promise} - A promise that resolves after handling the error.
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
