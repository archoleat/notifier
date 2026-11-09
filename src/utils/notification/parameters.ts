import type { HasTime } from '#types/has-time.js';
import type { Message } from '#types/message.js';

type Parameters = {
  message: Message;
  title: string;
  hasTime?: HasTime;
};

export type { Parameters };
