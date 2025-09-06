import type { Parameters as Common } from '#types/parameters.ts';

type Parameters = Common & {
  icon: string;
  title: string;
};

export type { Parameters };
