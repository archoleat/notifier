import { expect, describe, it, mock } from 'bun:test';
import { info } from '#config/info.ts';
import { LOG_LEVEL } from '#constants/log-level.ts';
import type { DefaultParametersTypes, TestCaseTypes } from './types/test-case.ts';

mock.module('#utils/splitter/splitter.ts', () => ({
  splitter: mock((params) => JSON.stringify(params)),
}));

describe('info function', () => {
  const defaultParameters: DefaultParametersTypes = {
    hasTime: true,
    notificationMode: 'console',
    icon: LOG_LEVEL.INFO,
    title: LOG_LEVEL.INFO,
  };

  const testCases: TestCaseTypes[] = [
    {
      description: 'should handle message with default parameters',
      input: { message: 'Test info message' },
      expected: { message: 'Test info message', ...defaultParameters },
    },
    {
      description: 'should handle message with hasTime set to false',
      input: { message: 'Test info message', hasTime: false },
      expected: {
        message: 'Test info message',
        ...defaultParameters,
        hasTime: false,
      },
    },
    {
      description: 'should handle message with notificationMode set to desktop',
      input: { message: 'Test info message', notificationMode: 'desktop' },
      expected: {
        message: 'Test info message',
        ...defaultParameters,
        notificationMode: 'desktop',
      },
    },
    {
      description: 'should handle message with notificationMode set to multiple',
      input: { message: 'Test info message', notificationMode: 'multiple' },
      expected: {
        message: 'Test info message',
        ...defaultParameters,
        notificationMode: 'multiple',
      },
    },
    {
      description: 'should handle message with all parameters customized',
      input: {
        message: 'Test info message',
        hasTime: false,
        notificationMode: 'desktop',
      },
      expected: {
        message: 'Test info message',
        ...defaultParameters,
        hasTime: false,
        notificationMode: 'desktop',
      },
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(description, async () => {
      const result = await info(input);

      expect(JSON.parse(result)).toEqual(expected);
    });
  });
});
