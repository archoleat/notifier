import { elector } from '#shared';

import type { Parameters } from '#types';

const success = async (parameters: Parameters) => {
  const {
    message,
    notificationMode = 'console',
    hasTime = true,
    messageLength = 80,
  } = parameters;

  return await elector({
    message,
    notificationMode,
    hasTime,
    messageLength,
    icon: './icons/success.png',
    title: 'SUCCESS',
  });
};

export { success };
