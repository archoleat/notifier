import type { Parameters } from './parameters.ts';

const truncate = async (parameters: Parameters) => {
  const { message } = parameters;

  if (Array.isArray(message)) {
    let string = '';
    let maxLength = Infinity;

    [string, { maxLength = maxLength } = {}] = message;

    const truncatedMessage = string.slice(0, maxLength);
    const dots = maxLength === Infinity ? '' : '...';

    return `${truncatedMessage}${dots}`;
  }

  return message;
};

export { truncate };
