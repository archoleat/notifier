import type { Message } from './message.ts';

type Parameters = {
  message: Message;
  hasTime?: boolean;
  notificationMode?: 'console' | 'desktop' | 'multiple';
};

export type { Parameters };
