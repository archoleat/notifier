import { describe, expect, test as spec, mock } from 'bun:test';

import { error } from '#config/error.ts';
import type { DefaultParametersTypes, TestCaseTypes } from '#types/test-case.ts';

mock.module('#utils/splitter/splitter.ts', () => ({
  splitter: mock((params) => JSON.stringify(params)),
}));

const defaultParameters: DefaultParametersTypes = {
  hasTime: true,
  notificationMode: 'console',
  icon: 'error',
  title: 'error',
};

const testCases: TestCaseTypes[] = [
  {
    description: 'should handle message with default parameters',
    input: { message: 'Test error message' },
    expected: { message: 'Test error message', ...defaultParameters },
  },
  {
    description: 'should handle message with hasTime set to false',
    input: { message: 'Test error message', hasTime: false },
    expected: {
      message: 'Test error message',
      ...defaultParameters,
      hasTime: false,
    },
  },
  {
    description: 'should handle message with notificationMode set to desktop',
    input: { message: 'Test error message', notificationMode: 'desktop' },
    expected: {
      message: 'Test error message',
      ...defaultParameters,
      notificationMode: 'desktop',
    },
  },
  {
    description: 'should handle message with notificationMode set to multiple',
    input: { message: 'Test error message', notificationMode: 'multiple' },
    expected: {
      message: 'Test error message',
      ...defaultParameters,
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
      ...defaultParameters,
      hasTime: false,
      notificationMode: 'desktop',
    },
  },
];

describe('error function', () => {
  for (const { description, input, expected } of testCases) {
    spec(description, async () => {
      const result = await error(input);

      expect(JSON.parse(result)).toEqual(expected);
    });
  }
});
