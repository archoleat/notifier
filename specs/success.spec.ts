import { describe, expect, test as spec, mock } from 'bun:test';

import { success } from '#config/success.ts';
import type { DefaultParametersTypes, TestCaseTypes } from '#types/test-case.ts';

mock.module('#utils/splitter/splitter.ts', () => ({
  splitter: mock((params) => JSON.stringify(params)),
}));

const defaultParameters: DefaultParametersTypes = {
  hasTime: true,
  notificationMode: 'console',
  icon: 'success',
  title: 'success',
};

const testCases: TestCaseTypes[] = [
  {
    description: 'should handle message with default parameters',
    input: { message: 'Test success message' },
    expected: { message: 'Test success message', ...defaultParameters },
  },
  {
    description: 'should handle message with hasTime set to false',
    input: { message: 'Test success message', hasTime: false },
    expected: {
      message: 'Test success message',
      ...defaultParameters,
      hasTime: false,
    },
  },
  {
    description: 'should handle message with notificationMode set to desktop',
    input: { message: 'Test success message', notificationMode: 'desktop' },
    expected: {
      message: 'Test success message',
      ...defaultParameters,
      notificationMode: 'desktop',
    },
  },
  {
    description: 'should handle message with notificationMode set to multiple',
    input: { message: 'Test success message', notificationMode: 'multiple' },
    expected: {
      message: 'Test success message',
      ...defaultParameters,
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
      ...defaultParameters,
      hasTime: false,
      notificationMode: 'desktop',
    },
  },
];

describe('success function', () => {
  for (const { description, input, expected } of testCases) {
    spec(description, async () => {
      const result = await success(input);

      expect(JSON.parse(result)).toEqual(expected);
    });
  }
});
