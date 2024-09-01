import Notifier from 'node-notifier';

import { truncate } from '#helpers/truncate/truncate.ts';

import type { Parameters } from './parameters.ts';

/**
 * Notifies.
 *
 * @param {string} icon - The icon for the notification.
 *
 * @param {string} message - The message content of the notification.
 *
 * @param {string} title - The title of the notification.
 *
 * @return {Promise} - A promise that resolves to the notification result.
 */
const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  return Notifier.notify({
    icon: `dist/icons/${icon}.png`,
    message: await truncate({ message }),
    title: title.toUpperCase(),
  });
};

export { notifier };
