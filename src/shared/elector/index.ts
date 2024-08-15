import { logLevel } from '../log-level/index.ts';
import { notifier } from '../notifier/index.ts';

import type { Parameters } from './parameters.d.ts';

const elector = async (parameters: Parameters) => {
  const {
    message,
    icon,
    title,
    hasTime = true,
    messageLength = 80,
    notificationMode = 'console',
  } = parameters;

  if (notificationMode === 'console') {
    return logLevel({ message, title, hasTime, messageLength });
  }

  if (notificationMode === 'desktop') {
    return notifier({ message, icon, title, messageLength });
  }

  return [
    await logLevel({ message, title, hasTime, messageLength }),
    await notifier({ message, icon, title, messageLength }),
  ];
};

export { elector };
