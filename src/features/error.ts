import { instance } from '#shared';

import type { Parameters } from '#types';

const error = (parameters: Parameters) => {
  const { message } = parameters;

  return console.error(instance.red(message));
};

export { error };
