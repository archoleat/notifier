import { logLevel } from '../log-level/index.ts';
import { notifier } from '../notifier/index.ts';

import type { Parameters } from './parameters.d.ts';

const elector = async (parameters: Parameters) => {
  const {
    icon,
    message,
    title,
    hasTime = true,
    notificationMode = 'console',
  } = parameters;

  if (notificationMode === 'console') {
    return logLevel({ message, title, hasTime });
  }

  if (notificationMode === 'desktop') {
    return notifier({ message, icon, title });
  }

  return [
    await logLevel({ message, title, hasTime }),
    await notifier({ message, icon, title }),
  ];
};

export { elector };
