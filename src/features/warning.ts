import { elector } from '#shared';

import type { Parameters } from '#types';

const warning = async (parameters: Parameters) => {
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
    icon: './icons/warning.png',
    title: 'WARNING',
  });
};

export { warning };
