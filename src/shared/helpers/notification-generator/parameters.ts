import type { Message } from '#types';

type Parameters = {
  message: Message;
  title: string;
  hasTime?: boolean | undefined;
};

export type { Parameters };
