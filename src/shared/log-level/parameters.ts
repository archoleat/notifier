import type { Message } from '#types/message.ts';

type Parameters = {
  message: Message;
  title: string;
  hasTime?: boolean | undefined;
};

export type { Parameters };
