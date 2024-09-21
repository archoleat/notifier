import { beforeEach, describe, expect, test as spec } from 'vitest';

import { success } from '#index';

describe('Success', () => {
  // let atRule: Function;

  beforeEach(() => {});

  spec('', async () => {
    return await success({
      message: '', // array and length
      hasTime: true,
      notificationMode: 'console',
    });
  });
});
