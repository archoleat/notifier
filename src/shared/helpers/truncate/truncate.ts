import type { Parameters } from './parameters.ts';

/**
 * Truncates a string or array message based on the specified length.
 *
 * @param {string | Array} message - The message to be truncated.
 *
 * @param {number} [length=Infinity] - The message to be truncated.
 *
 * @return {string} - The truncated message if it's length exceeds
 * the specified length, otherwise the original message.
 */
const truncate = async (parameters: Parameters) => {
  const { message } = parameters;

  let string;
  let length = Infinity;

  if (Array.isArray(message)) {
    [string, { length = Infinity } = {}] = message;
  } else {
    string = message;
  }

  if (string.length > length) {
    return `${string.slice(0, Math.max(0, length))}...`;
  }

  return string;
};

export { truncate };
