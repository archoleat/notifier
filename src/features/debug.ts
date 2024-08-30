import { LOG_LEVELS } from '#constants/log-levels.ts';

import { splitter } from '#helpers/splitter/splitter.ts';

import type { Parameters } from '#types/parameters.ts';

/**
 * The `debug` asynchronous function takes a message as a parameter and displays
 * it with an icon and title for debugging purposes.
 *
 * @param {string} message -
 *
 * @returns The `debug` function is returning the result of calling the
 * `splitter` function with the provided `message`, `icon`, and `title` parameters.
 * The `icon` is set to 'debug' and the `title` is set to 'DEBUG'.
 */
const debug = async (parameters: Parameters) => {
  const { message } = parameters;

  const LABEL = LOG_LEVELS.DEBUG;

  return splitter({
    message,
    icon: LABEL,
    title: LABEL,
  });
};

export { debug };
