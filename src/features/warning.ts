import { elector } from '#shared';

import type { Parameters } from '#types';

const warning = async (parameters: Parameters) => {
  const {
    message,
    icon = './icons/warning.png',
    title = 'WARNING',
    notificationMode = 'console',
  } = parameters;

  return elector({ message, icon, title, notificationMode });
};

export { warning };
