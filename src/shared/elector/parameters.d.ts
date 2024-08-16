import type { Message } from '#types';

type Parameters = {
  message: Message;
  icon: string;
  title: string;
  hasTime?: boolean;
  notificationMode?: 'console' | 'desktop' | 'multiple';
};

export { Parameters };
