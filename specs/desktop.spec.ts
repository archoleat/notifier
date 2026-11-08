import { describe, expect, mock, test as spec } from 'bun:test';
import { isAbsolute } from 'node:path';

import Notifier from 'node-notifier';

import { notifier } from '#utils/notifier/notifier.ts';

mock.module('node-notifier', () => ({ default: { notify: mock() } }));

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
