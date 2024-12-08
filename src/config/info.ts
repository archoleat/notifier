import { LOG_LEVELS } from '#constants/log-levels.ts';
import type { Parameters } from '#types/parameters.ts';
import { splitter } from '#utils/splitter/splitter.ts';

/**
 * Handles an info.
 *
 * @param {string|array} message - The info message,
 * @prop {''} or @prop {['', { length: number }]}.
 *
 * @param {boolean} [hasTime=true] - Indicates if the info has a timestamp.
 *
 * @param {string} [notificationMode='console'] - The notification mode
 * for the info.
 *
 * @return {Promise} - A promise that resolves after handling the info.
 */
const info = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  const LABEL = LOG_LEVELS.INFO;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: LABEL,
    title: LABEL,
  });
};

export { info };
