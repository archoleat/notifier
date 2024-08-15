// @ts-ignore
import Notifier from 'node-notifier';

import { truncate } from '../truncate/index.ts';

import type { Parameters } from './parameters.d.ts';

const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  return Notifier.notify({
    title,
    icon: `dist/icons/${icon}.png`,
    message: await truncate({ message }),
  });
};

export { notifier };
