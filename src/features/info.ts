import { instance } from '#shared';

import type { Parameters } from '#types';

const info = (parameters: Parameters) => {
  const { message } = parameters;

  return console.info(instance.blue(message));
};

export { info };
