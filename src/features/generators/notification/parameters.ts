import type { HasTime, Message } from '#types';

type Parameters = {
  message: Message;
  title: string;
  hasTime?: HasTime;
};

export type { Parameters };
