import { logLevel } from '../log-level/index.ts';
import { notifier } from '../notifier/index.ts';

import type { Parameters } from './parameters.d.ts';

const elector = async (parameters: Parameters) => {
  const {
    message,
    icon,
    title,
    notificationMode = 'console',
    hasTime = true,
    messageLength = 80,
  } = parameters;

  if (notificationMode === 'console') {
    return await logLevel({ message, title, hasTime, messageLength });
  }

  if (notificationMode === 'desktop') {
    return await notifier({ message, icon, title, messageLength });
  }

  if (notificationMode === 'multiple') {
    return [
      await logLevel({ message, title, hasTime, messageLength }),
      await notifier({ message, icon, title, messageLength }),
    ];
  }
};

export { elector };
