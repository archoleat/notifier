import { expect, describe, it, mock } from 'bun:test';
import { LOG_LEVEL } from '#constants/log-level.ts';
import { warning } from '#config/warning.ts';
import type { NotificationMode } from '#types/notification-mode.ts';
import type { TestCaseTypes } from './types/test-case.ts';

mock.module('#utils/splitter/splitter.ts', () => ({
  splitter: mock((params) => JSON.stringify(params)),
}));

describe('warning function', () => {
  const defaultParams = {
    hasTime: true,
    notificationMode: 'console' as NotificationMode,
    icon: LOG_LEVEL.WARNING,
    title: LOG_LEVEL.WARNING,
  };

  const testCases: TestCaseTypes[] = [
    {
      description: 'should handle message with default parameters',
      input: { message: 'Test warning message' },
      expected: {
        message: 'Test warning message',
        ...defaultParams,
      },
    },
    {
      description: 'should handle message with hasTime set to false',
      input: { message: 'Test warning message', hasTime: false },
      expected: {
        message: 'Test warning message',
        ...defaultParams,
        hasTime: false,
      },
    },
    {
      description: 'should handle message with notificationMode set to desktop',
      input: { message: 'Test warning message', notificationMode: 'desktop' },
      expected: {
        message: 'Test warning message',
        ...defaultParams,
        notificationMode: 'desktop',
      },
    },
    {
      description: 'should handle message with notificationMode set to multiple',
      input: { message: 'Test warning message', notificationMode: 'multiple' },
      expected: {
        message: 'Test warning message',
        ...defaultParams,
        notificationMode: 'multiple',
      },
    },
    {
      description: 'should handle message with all parameters customized',
      input: {
        message: 'Test warning message',
        hasTime: false,
        notificationMode: 'desktop',
      },
      expected: {
        message: 'Test warning message',
        ...defaultParams,
        hasTime: false,
        notificationMode: 'desktop',
      },
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(description, async () => {
      const result = await warning(input);

      expect(JSON.parse(result)).toEqual(expected);
    });
  });
});
