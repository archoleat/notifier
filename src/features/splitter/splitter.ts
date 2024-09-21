import { logLevel } from '../log-level/log-level.ts';
import { notifier } from '../notifier/notifier.ts';

import type { Parameters } from './parameters.ts';

/**
 * Splits the notification based on the notification mode
 * and performs the corresponding action.
 *
 * @param {string} icon - The icon for the notification.
 *
 * @param {string} title - The title of the notification.
 *
 * @param {string} message - The message content of the notification.
 *
 * @param {boolean} hasTime - Indicates if the notification includes a timestamp.
 *
 * @param {string} notificationMode - The mode of notification
 * ('console', 'desktop' or 'multiple').
 *
 * @returns {Object|Array} - The result of the notification action based on the mode.
 */
const splitter = async (parameters: Parameters) => {
  const { icon, title, message, hasTime, notificationMode } = parameters;

  if (notificationMode === 'console') {
    return logLevel({ message, title, hasTime });
  }

  if (notificationMode === 'desktop') {
    return notifier({ message, icon, title });
  }

  return [
    await logLevel({ message, title, hasTime }),
    await notifier({ message, icon, title }),
  ];
};

export { splitter };
