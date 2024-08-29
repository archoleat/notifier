import type { Parameters } from './parameters.ts';

/**
 * The `truncate` asynchronous function takes a string and
 * an optional length parameter, and truncates the string if
 * it exceeds the specified length, appending "..." if necessary.
 *
 * @param {Object} parameters - The `parameters` for the `truncate` function.
 *
 * @param {string} parameters.string - The `string` parameter accepts a string
 * with the message.
 *
 * @param {number} parameters.length - The `length` parameter sets the
 * length of your message.
 *
 * @returns {Promise} - If the length of the `string` in the `message`
 * parameter is greater than the specified `length`, a truncated version
 * of the `string` with `...` appended at the end is being returned.
 * Otherwise, the original `string` is being returned.
 */
const truncate = async (parameters: Parameters) => {
  const {
    message: [string, { length = Infinity } = {}],
  } = parameters;

  if (string.length > length) {
    return `${string.slice(0, Math.max(0, length))}...`;
  }

  return string;
};

export { truncate };
