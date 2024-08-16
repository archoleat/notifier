import { elector } from '#shared';

import type { Parameters } from '#types';

/**
 * The `debug` asynchronous function takes a message as a parameter and displays
 * it with an icon and title for debugging purposes.
 *
 * @param {Parameters} parameters - It seems like you haven't provided the details of the `parameters`
 * object. Could you please provide the structure and values of the `parameters` object so that I can
 * assist you further with the `debug` function?
 *
 * @returns The `debug` asynchronous function is returning the result of calling the
 * `elector` function with the provided `message`, `icon`, and `title` parameters.
 * The `icon` is set to 'debug' and the `title` is set to 'DEBUG'.
 */
const debug = async (parameters: Parameters) => {
  const { message } = parameters;

  return elector({
    message,
    icon: 'debug',
    title: 'DEBUG',
  });
};

export { debug };
