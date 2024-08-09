import { logLevel } from './log-level/index.ts';
import { notifier } from './notifier/index.ts';

import type { Parameters } from '#types';

const elector = async (parameters: Parameters) => {
  const { message, icon, title, notificationMode } = parameters;

  if (notificationMode === 'console') {
    return logLevel({ message, title });
  }

  if (notificationMode === 'desktop') {
    return notifier({ message, icon, title });
  }

  if (notificationMode === 'multiple') {
    return [logLevel({ message, title }), notifier({ message, icon, title })];
  }
};

export { elector };
