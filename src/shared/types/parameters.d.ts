import type { Message } from './message.d.ts';

type Parameters = {
  message: Message;
  hasTime?: boolean;
  notificationMode?: 'console' | 'desktop' | 'multiple';
};

export { Parameters };
