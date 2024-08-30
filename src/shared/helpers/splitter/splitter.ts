import { logLevel } from '#shared/log-level/log-level.ts';
import { notifier } from '#shared/notifier/notifier.ts';

import type { Parameters } from './parameters.ts';

/**
 * The function `splitter` is an asynchronous function that handles
 * notifications either through console logging or desktop notifications
 * based on the specified `notificationMode`.
 *
 * @param {string} icon -
 *
 * @param {string} message -
 *
 * @param {string} title -
 *
 * @param {boolean} hasTime -
 *
 * @param {'console' | 'desktop' | 'multiple'} notificationMode -
 *
 * @returns If the `notificationMode` is set to 'console', the `logLevel`
 * function will be called with the provided `message`, `title`, and `hasTime`
 * parameters. If the `notificationMode` is set to 'desktop', the `notifier`
 * function will be called with the provided `message`, `icon`, and `title`
 * parameters. If the `notificationMode` is
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
