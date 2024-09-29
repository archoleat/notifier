import type { Parameters } from './parameters.ts';

const truncate = async (parameters: Parameters) => {
  const { message } = parameters;

  if (Array.isArray(message)) {
    const [string, { maxLength = Infinity } = {}] = message;

    const body = string.slice(0, maxLength);
    const dots = maxLength === Infinity ? '' : '...';

    return `${body}${dots}`;
  }

  return message;
};

export { truncate };
