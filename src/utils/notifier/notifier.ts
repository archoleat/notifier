import Notifier from 'node-notifier';

import { truncate } from '#helpers/truncate/truncate.ts';

import type { Parameters } from './parameters.ts';

const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  return Notifier.notify({
    icon: `./icons/${icon}.png`,
    message: await truncate({ message }),
    title: title.toUpperCase(),
  });
};

export { notifier };
