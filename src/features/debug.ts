import { messageGenerator } from '#shared/message-generator/message-generator.ts';

import type { Parameters } from '#types/parameters.ts';

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

  const label = 'debug';

  return messageGenerator({
    message,
    icon: label,
    title: label,
  });
};

export { debug };
