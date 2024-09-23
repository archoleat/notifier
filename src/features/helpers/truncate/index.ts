import type { Parameters } from './parameters.ts';

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
