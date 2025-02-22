import type { Parameters } from '#types/parameters.ts';
import { splitter } from '#utils/splitter/splitter.ts';

const error = async (parameters: Parameters) => {
  const { message, hasTime = true, notificationMode = 'console' } = parameters;

  return splitter({
    message,
    hasTime,
    notificationMode,
    icon: 'error',
    title: 'error',
  });
};

export { error };
