import { elector } from '#shared';

import type { Parameters } from '#types';

const error = (parameters: Parameters) => {
  const {
    message,
    icon = './icons/error.png',
    title = 'ERROR',
    notificationMode = 'console',
  } = parameters;

  return elector({ message, icon, title, notificationMode });
};

export { error };
