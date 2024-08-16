import type { Parameters } from './parameters.d.ts';

/**
 * The `truncate` asynchronous function takes a string and
 * an optional length parameter, and truncates the string if
 * it exceeds the specified length, appending "..." if necessary.
 *
 * @param {Parameters} parameters - It seems like you haven't provided the actual parameters for the
 * `truncate` function. Could you please provide the parameters object so that I can assist you further
 * with the `truncate` function?
 *
 * @returns If the length of the `string` in the `message` parameter is greater
 * than the specified `length`, a truncated version of the `string` with `...`
 * appended at the end is being returned.
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
