import { join } from 'node:path';

import Notifier from 'node-notifier';

import { truncate } from '#helpers/truncate/truncate.ts';

import type { Parameters } from './parameters.ts';

const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  return Notifier.notify({
    icon: join(__dirname, 'icons', `${icon}.png`),
    message: await truncate({ message }),
    title: title.toUpperCase(),
  });
};

export { notifier };
