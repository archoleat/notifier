import { splitter } from '#utils';

import type { Parameters } from '../data/index.ts';
import { LOG_LEVELS } from '../data/index.ts';

/**
 * Handles an warning.
 *
 * @param {string|array} message - The warning message,
 * @prop {''} or @prop {['', { length: number }]}.
 *
 * @param {boolean} [hasTime=true] - Indicates if the warning has a timestamp.
 *
 * @param {string} [notificationMode='console'] - The notification mode
 * for the warning.
 *
 * @return {Promise} - A promise that resolves after handling the warning.
 */
const warning = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const LABEL = LOG_LEVELS.WARNING;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: LABEL,
    title: LABEL,
  });
};

export { warning };