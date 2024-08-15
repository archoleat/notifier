import { elector } from '#shared';

import type { Parameters } from '#types';

const warning = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return elector({
    message,
    hasTime,
    notificationMode,
    icon: 'warning',
    title: 'WARNING',
  });
};

export { warning };
