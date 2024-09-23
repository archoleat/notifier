import { LOG_LEVELS } from '#shared';

import { splitter } from '#features';

import type { Parameters } from '#shared';

/**
 * Handles an warning.
 *
 * @param {string} message - The warning message.
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