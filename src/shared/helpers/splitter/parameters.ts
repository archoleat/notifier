import type { Message } from '#types/message.ts';
import type { NotificationMode } from '#types/notification-mode.ts';

type Parameters = {
  icon: string;
  title: string;
  message: Message;
  hasTime?: boolean;
  notificationMode?: NotificationMode;
};

export type { Parameters };
