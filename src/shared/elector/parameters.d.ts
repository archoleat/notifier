import type { Message } from '#types';

type Parameters = {
  message: Message;
  icon: string;
  title: string;
  notificationMode?: 'console' | 'desktop' | 'multiple';
  hasTime?: boolean;
};

export { Parameters };
