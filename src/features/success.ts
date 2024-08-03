import { instance } from '#shared';

import type { Parameters } from '#types';

const success = (parameters: Parameters) => {
  const { message } = parameters;

  return console.log(instance.green(message));
};

export { success };
