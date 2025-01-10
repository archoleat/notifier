import { consoleLog } from '../console-log/console-log.ts';
import { notifier } from '../notifier/notifier.ts';
import type { Parameters } from './parameters.ts';

const splitter = async (parameters: Parameters) => {
  const { icon, title, message, hasTime, notificationMode } = parameters;

  if (notificationMode === 'console') {
    return consoleLog({ message, title, hasTime });
  }

  if (notificationMode === 'desktop') {
    return notifier({ message, icon, title });
  }

  return [
    await consoleLog({ message, title, hasTime }),
    await notifier({ message, icon, title }),
  ];
};

export { splitter };
