import type { Parameters } from './parameters.d.ts';

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
