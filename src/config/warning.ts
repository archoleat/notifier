import type { Parameters } from '#types/parameters.js';
import { splitter } from '#utils/splitter/splitter.js';

const warning = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: 'warning',
    title: 'warning',
  });
};

export { warning };
