import type { HasTime, Message } from '#shared';

type Parameters = {
  message: Message;
  title: string;
  hasTime?: HasTime;
};

export type { Parameters };
