import { elector } from '#shared';

import type { Parameters } from '#types';

const error = async (parameters: Parameters) => {
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
    icon: './icons/error.png',
    title: 'ERROR',
  });
};

export { error };
