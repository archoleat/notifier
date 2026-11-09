import { fileURLToPath } from 'node:url';

import Notifier from 'node-notifier';

import { truncate } from '#helpers/truncate/truncate.js';

import type { Parameters } from './parameters.ts';

const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  return Notifier.notify({
    icon: fileURLToPath(new URL(`./icons/${icon}.png`, import.meta.url)),
    message: await truncate({ message }),
    title: title.toUpperCase(),
  });
};

export { notifier };
