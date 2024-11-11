import type { HasTime, Message } from '../../data/index.ts';

type Parameters = {
  message: Message;
  title: string;
  hasTime?: HasTime;
};

export type { Parameters };
