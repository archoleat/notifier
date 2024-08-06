import { elector } from '#shared';

import type { Parameters } from '#types';

const info = (parameters: Parameters) => {
  const {
    message,
    icon = './icons/info.png',
    title = 'INFO',
    notificationMode = 'console',
  } = parameters;

  return elector({ message, icon, title, notificationMode });
};

export { info };
