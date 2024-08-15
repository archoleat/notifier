import { elector } from '#shared';

import type { Parameters } from '#types';

const error = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'error',
    title: 'ERROR',
  });
};

export { error };
