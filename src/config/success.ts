import type { Parameters } from '#types/parameters.ts';
import { splitter } from '#utils/splitter/splitter.ts';

const success = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: 'success',
    title: 'success',
  });
};

export { success };
