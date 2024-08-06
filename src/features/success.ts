import { elector } from '#shared';

import type { Parameters } from '#types';

const success = async (parameters: Parameters) => {
  const {
    message,
    icon = './icons/success.png',
    title = 'SUCCESS',
    notificationMode = 'console',
  } = parameters;

  return elector({ message, icon, title, notificationMode });
};

export { success };
