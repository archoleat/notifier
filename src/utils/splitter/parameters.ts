import type { Message, NotificationMode } from '../../data/index.ts';

type Parameters = {
  icon: string;
  title: string;
  message: Message;
  hasTime?: boolean;
  notificationMode?: NotificationMode;
};

export type { Parameters };
