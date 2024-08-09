// @ts-ignore
import Notifier from 'node-notifier';

import type { Parameters } from './parameters.d.ts';

const notifier = async (parameters: Parameters) => {
  const { message, title, icon } = parameters;

  return Notifier.notify({
    message,
    icon,
    title,
  });
};

export { notifier };
