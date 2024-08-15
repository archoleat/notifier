import { elector } from '#shared';

import type { Parameters } from '#types';

const success = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'success',
    title: 'SUCCESS',
  });
};

export { success };
