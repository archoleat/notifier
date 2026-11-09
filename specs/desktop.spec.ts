import {
  afterEach,
  beforeEach,
  describe,
  expect,
  mock,
  test as spec,
} from 'bun:test';
import { execFile } from 'node:child_process';
import { isAbsolute } from 'node:path';

import Notifier from 'node-notifier';

import { notifier } from '#utils/notifier/notifier.ts';

mock.module('node-notifier', () => ({ default: { notify: mock() } }));
mock.module('node:os', () => ({ platform: () => 'darwin' }));
mock.module('node:child_process', () => ({
  execFile: mock((_file, _args, callback) => callback(null)),
}));

beforeEach(() => {
  (Notifier.notify as ReturnType<typeof mock>).mockImplementation(
    (_options, callback) => callback(null),
  );
});

afterEach(() => {
  (Notifier.notify as ReturnType<typeof mock>).mockReset();
  (execFile as ReturnType<typeof mock>).mockClear();
});

describe('Desktop notification paths', () => {
  spec('should resolve an absolute icon path in an ES module', async () => {
    await notifier({ icon: 'info', message: 'Hello', title: 'info' });

    const options = (Notifier.notify as ReturnType<typeof mock>).mock.calls[0]?.[0];

    expect(isAbsolute(options.icon)).toBe(true);
    expect(options.icon).toEndWith('/icons/info.png');
    expect(options.title).toBe('INFO');
    expect(options.message).toBe('Hello');
  });
});

describe('macOS architecture fallback', () => {
  spec(
    'should pass notification text as arguments when Rosetta is absent',
    async () => {
      (Notifier.notify as ReturnType<typeof mock>).mockImplementation(() => {
        throw Object.assign(new Error('Bad CPU type'), { errno: -86 });
      });

      const message = 'A "quoted" message; do shell script "unsafe"';

      await notifier({ icon: 'info', message, title: 'info' });

      const args = (execFile as ReturnType<typeof mock>).mock.calls[0];

      expect(args?.[0]).toBe('/usr/bin/osascript');
      expect(args?.[1]?.slice(-2)).toEqual([message, 'INFO']);
      expect(args?.[1]?.[1]).not.toContain(message);
      expect(args?.[1]?.at(-3)).toBe('--');
    },
  );

  spec('should preserve unrelated notification errors', async () => {
    (Notifier.notify as ReturnType<typeof mock>).mockImplementation(() => {
      throw new Error('Permission denied');
    });

    await expect(
      notifier({ icon: 'info', message: 'Hello', title: 'info' }),
    ).rejects.toThrow('Permission denied');
    expect(execFile).not.toHaveBeenCalled();
  });
});

spec(
  'should handle callback-delivered architecture errors and option-like text',
  async () => {
    (Notifier.notify as ReturnType<typeof mock>).mockImplementation(
      (_options, callback) => {
        queueMicrotask(() => {
          callback(Object.assign(new Error('Bad CPU type'), { errno: -86 }));
        });
      },
    );

    await notifier({ icon: 'info', message: '-i', title: 'info' });

    expect(
      (execFile as ReturnType<typeof mock>).mock.calls[0]?.[1]?.slice(-3),
    ).toEqual(['--', '-i', 'INFO']);
  },
);
