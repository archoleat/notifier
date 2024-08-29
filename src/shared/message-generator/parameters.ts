import type { Message } from '#types';

type Parameters = {
  icon: string;
  title: string;
  message: Message;
  hasTime?: boolean;
  notificationMode?: 'console' | 'desktop' | 'multiple';
};

export type { Parameters };
