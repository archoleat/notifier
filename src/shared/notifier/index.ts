// @ts-ignore
import Notifier from 'node-notifier';

import { maxMessageLength } from '../max-message-length/index.ts';

import type { Parameters } from './parameters.d.ts';

const notifier = async (parameters: Parameters) => {
  const { message, icon, title, messageLength = 80 } = parameters;

  return Notifier.notify({
    message: maxMessageLength({ message, messageLength }),
    icon,
    title,
  });
};

export { notifier };
