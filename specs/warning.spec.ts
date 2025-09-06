import { describe, expect, test as spec, mock } from 'bun:test';

import { warning } from '#config/warning.ts';
import type { DefaultParametersTypes, TestCaseTypes } from '#types/test-case.ts';

mock.module('#utils/splitter/splitter.ts', () => ({
  splitter: mock((params) => JSON.stringify(params)),
}));

const defaultParameters: DefaultParametersTypes = {
  hasTime: true,
  notificationMode: 'console',
  icon: 'warning',
  title: 'warning',
};

const testCases: TestCaseTypes[] = [
  {
    description: 'should handle message with default parameters',
    input: { message: 'Test warning message' },
    expected: { message: 'Test warning message', ...defaultParameters },
  },
  {
    description: 'should handle message with hasTime set to false',
    input: { message: 'Test warning message', hasTime: false },
    expected: {
      message: 'Test warning message',
      ...defaultParameters,
      hasTime: false,
    },
  },
  {
    description: 'should handle message with notificationMode set to desktop',
    input: { message: 'Test warning message', notificationMode: 'desktop' },
    expected: {
      message: 'Test warning message',
      ...defaultParameters,
      notificationMode: 'desktop',
    },
  },
  {
    description: 'should handle message with notificationMode set to multiple',
    input: { message: 'Test warning message', notificationMode: 'multiple' },
    expected: {
      message: 'Test warning message',
      ...defaultParameters,
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
      ...defaultParameters,
      hasTime: false,
      notificationMode: 'desktop',
    },
  },
];

describe('warning function', () => {
  for (const { description, input, expected } of testCases) {
    spec(description, async () => {
      const result = await warning(input);

      expect(JSON.parse(result)).toEqual(expected);
    });
  }
});
