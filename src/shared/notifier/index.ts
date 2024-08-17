import Notifier from 'node-notifier';

import { truncate } from '../truncate/index.ts';

import type { Parameters } from './parameters.d.ts';

/**
 * The asynchronous function `notifier` takes in parameters for
 * an icon, message, and title, then uses a Notifier to
 * display a notification with the specified details.
 *
 * @param {string} icon -
 *
 * @param {string} message -
 *
 * @param {string} title -
 *
 * @returns The `notifier` function is returning a promise that
 * resolves to the result of calling the `Notifier.notify` function with the
 * provided `title`, `icon`, and truncated `message`.
 * The `icon` parameter is used to construct the path to the icon image file.
 */
const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  return Notifier.notify({
    title,
    icon: `dist/icons/${icon}.png`,
    message: await truncate({ message }),
  });
};

export { notifier };
