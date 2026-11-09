import type { Parameters as Common } from '#types/parameters.js';

type Parameters = Common & {
  icon: string;
  title: string;
};

export type { Parameters };
