import { LOG_LEVELS } from '#constants/log-levels.ts';

import { splitter } from '#helpers/splitter/splitter.ts';

import type { Parameters } from '#types/parameters.ts';

/**
 * Handles an success.
 *
 * @param {string} message - The success message.
 *
 * @param {boolean} [hasTime=true] - Indicates if the success has a timestamp.
 *
 * @param {string} [notificationMode='console'] - The notification mode
 * for the success.
 *
 * @return {Promise} - A promise that resolves after handling the success.
 */
const success = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const LABEL = LOG_LEVELS.SUCCESS;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: LABEL,
    title: LABEL,
  });
};

export { success };
