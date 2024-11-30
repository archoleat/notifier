import { splitter } from '#utils';

import type { Parameters } from '../data/index.ts';
import { LOG_LEVELS } from '../data/index.ts';

/**
 * Handles an error.
 *
 * @param {string|array} message - The error message,
 * @prop {''} or @prop {['', { length: number }]}.
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
