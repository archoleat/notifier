import type { Message } from './message.ts';
import type { NotificationMode } from './notification-mode.ts';

type Parameters = {
  message: Message;
  hasTime?: boolean;
  notificationMode?: NotificationMode;
};

export type { Parameters };
