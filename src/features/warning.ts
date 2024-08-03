import { instance } from '#shared';

import type { Parameters } from '#types';

const warning = (parameters: Parameters) => {
  const { message } = parameters;

  return console.warn(instance.yellow(message));
};

export { warning };
