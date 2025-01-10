import { expect, describe, it, mock } from 'bun:test';
import { error } from '#config/error.ts';
import { LOG_LEVELS } from '#constants/log-levels.ts';
import type { NotificationMode } from '#types/notification-mode.ts';
import type { TestCaseTypes } from './types/test-case.ts';

mock.module('#utils/splitter/splitter.ts', () => ({
  splitter: mock((params) => JSON.stringify(params)),
}));

describe('error function', () => {
  const defaultParams = {
    hasTime: true,
    notificationMode: 'console' as NotificationMode,
    icon: LOG_LEVELS.ERROR,
    title: LOG_LEVELS.ERROR,
  };

  const testCases: TestCaseTypes[] = [
    {
      description: 'should handle message with default parameters',
      input: { message: 'Test error message' },
      expected: { message: 'Test error message', ...defaultParams },
    },
    {
      description: 'should handle message with hasTime set to false',
      input: { message: 'Test error message', hasTime: false },
      expected: { message: 'Test error message', ...defaultParams, hasTime: false },
    },
    {
      description: 'should handle message with notificationMode set to desktop',
      input: { message: 'Test error message', notificationMode: 'desktop' },
      expected: {
        message: 'Test error message',
        ...defaultParams,
        notificationMode: 'desktop',
      },
    },
    {
      description: 'should handle message with notificationMode set to multiple',
      input: { message: 'Test error message', notificationMode: 'multiple' },
      expected: {
        message: 'Test error message',
        ...defaultParams,
        notificationMode: 'multiple',
      },
    },
    {
      description: 'should handle message with all parameters customized',
      input: {
        message: 'Test error message',
        hasTime: false,
        notificationMode: 'desktop',
      },
      expected: {
        message: 'Test error message',
        ...defaultParams,
        hasTime: false,
        notificationMode: 'desktop',
      },
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(description, async () => {
      const result = await error(input);

      expect(JSON.parse(result)).toEqual(expected);
    });
  });
});
