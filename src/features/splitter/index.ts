import { logLevel } from '../log-level/index.ts';
import { notifier } from '../notifier/index.ts';

import type { Parameters } from './parameters.ts';

const splitter = async (parameters: Parameters) => {
  const { icon, title, message, hasTime, notificationMode } = parameters;

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

export { splitter };
