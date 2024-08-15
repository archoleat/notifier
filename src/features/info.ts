import { elector } from '#shared';

import type { Parameters } from '#types';

const info = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'info',
    title: 'INFO',
  });
};

export { info };
