import { elector } from '#shared';

import type { Parameters } from '#types';

const warning = async (parameters: Parameters) => {
  const {
    message,
    hasTime = true,
    messageLength = 80,
    notificationMode = 'console',
  } = parameters;

  return elector({
    message,
    hasTime,
    messageLength,
    notificationMode,
    icon: './icons/warning.png',
    title: 'WARNING',
  });
};

export { warning };
