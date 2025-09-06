import type { NotificationMode } from '#types/notification-mode.ts';
import type { Parameters } from '#types/parameters.ts';

type DefaultParametersTypes = {
  hasTime: boolean;
  notificationMode: NotificationMode;
  icon: string;
  title: string;
};

type TestCaseTypes = {
  description: string;
  input: Parameters;
  expected: Parameters & {
    icon: string;
    title: string;
  };
};

export type { DefaultParametersTypes, TestCaseTypes };
