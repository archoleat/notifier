import { resolve } from 'node:path';

import Notifier from 'node-notifier';

import { truncate } from '#helpers/truncate/truncate.ts';

import type { Parameters } from './parameters.ts';

const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  const imageExtension = process.platform === 'win32' ? 'ico' : 'png';

  return Notifier.notify({
    icon: resolve(__dirname, 'icons', `${icon}.${imageExtension}`),
    message: await truncate({ message }),
    title: title.toUpperCase(),
  });
};

export { notifier };
