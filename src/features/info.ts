import { elector } from '#shared';

import type { Parameters } from '#types';

const info = async (parameters: Parameters) => {
  const {
    message,
    notificationMode = 'console',
    hasTime = true,
    messageLength = 80,
  } = parameters;

  return elector({
    message,
    notificationMode,
    hasTime,
    messageLength,
    icon: './icons/info.png',
    title: 'INFO',
  });
};

export { info };
