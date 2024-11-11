import { beforeEach, describe, expect, test as spec } from 'vitest';

import { success } from '#index';

describe('Success Notification', async () => {
  // let atRule: Function;

  beforeEach(async () => {});

  spec('should', async () => {
    await success({
      message: '', // array and length
      hasTime: true,
      notificationMode: 'console',
    });
  });
});
