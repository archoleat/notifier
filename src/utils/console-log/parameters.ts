import type { HasTime } from '#types/has-time.ts';
import type { Message } from '#types/message.ts';

type Parameters = {
  message: Message;
  title: string;
  hasTime?: HasTime;
};

export type { Parameters };
