import { messageGenerator } from '#shared';

import type { Parameters } from '#types';

/**
 * The `debug` asynchronous function takes a message as a parameter and displays
 * it with an icon and title for debugging purposes.
 *
 * @param {string} message -
 *
 * @returns The `debug` function is returning the result of calling the
 * `messageGenerator` function with the provided `message`, `icon`, and `title` parameters.
 * The `icon` is set to 'debug' and the `title` is set to 'DEBUG'.
 */
const debug = async (parameters: Parameters) => {
  const { message } = parameters;

  return messageGenerator({
    message,
    icon: 'debug',
    title: 'DEBUG',
  });
};

export { debug };
