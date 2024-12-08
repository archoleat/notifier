import { logLevel } from '../log-level/log-level.ts';
import { notifier } from '../notifier/notifier.ts';
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
