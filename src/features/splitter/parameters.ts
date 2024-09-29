import type { Message, NotificationMode } from '#shared';

type Parameters = {
  icon: string;
  title: string;
  message: Message;
  hasTime?: boolean;
  notificationMode?: NotificationMode;
};

export type { Parameters };
