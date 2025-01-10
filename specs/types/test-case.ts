import type { Parameters } from '#types/parameters.ts';

type TestCaseTypes = {
  description: string;
  input: Parameters;
  expected: Parameters & {
    icon: string;
    title: string;
  };
};

export type { TestCaseTypes };
