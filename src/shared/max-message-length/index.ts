import type { Parameters } from './parameters.d.ts';

const maxMessageLength = (parameters: Parameters) => {
  const { message, messageLength = 80 } = parameters;

  if (message.length > messageLength) {
    return `The message must be no longer than ${messageLength} characters`;
  }

  return message;
};

export { maxMessageLength };
