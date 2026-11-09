import type { Parameters } from '#types/parameters.js';
import { splitter } from '#utils/splitter/splitter.js';

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
