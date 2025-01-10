import { expect, describe, it, mock } from 'bun:test';
import { success } from '#config/success.ts';
import { LOG_LEVELS } from '#constants/log-levels.ts';
import type { NotificationMode } from '#types/notification-mode.ts';
import type { TestCaseTypes } from './types/test-case.ts';

mock.module('#utils/splitter/splitter.ts', () => ({
  splitter: mock((params) => JSON.stringify(params)),
}));

describe('success function', () => {
  const defaultParams = {
    hasTime: true,
    notificationMode: 'console' as NotificationMode,
    icon: LOG_LEVELS.SUCCESS,
    title: LOG_LEVELS.SUCCESS,
  };

  const testCases: TestCaseTypes[] = [
    {
      description: 'should handle message with default parameters',
      input: { message: 'Test success message' },
      expected: { message: 'Test success message', ...defaultParams },
    },
    {
      description: 'should handle message with hasTime set to false',
      input: { message: 'Test success message', hasTime: false },
      expected: {
        message: 'Test success message',
        ...defaultParams,
        hasTime: false,
      },
    },
    {
      description: 'should handle message with notificationMode set to desktop',
      input: { message: 'Test success message', notificationMode: 'desktop' },
      expected: {
        message: 'Test success message',
        ...defaultParams,
        notificationMode: 'desktop',
      },
    },
    {
      description: 'should handle message with notificationMode set to multiple',
      input: { message: 'Test success message', notificationMode: 'multiple' },
      expected: {
        message: 'Test success message',
        ...defaultParams,
        notificationMode: 'multiple',
      },
    },
    {
      description: 'should handle message with all parameters customized',
      input: {
        message: 'Test success message',
        hasTime: false,
        notificationMode: 'desktop',
      },
      expected: {
        message: 'Test success message',
        ...defaultParams,
        hasTime: false,
        notificationMode: 'desktop',
      },
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(description, async () => {
      const result = await success(input);

      expect(JSON.parse(result)).toEqual(expected);
    });
  });
});
