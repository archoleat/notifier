import { execFile } from 'node:child_process';
import { platform } from 'node:os';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import Notifier from 'node-notifier';

import { truncate } from '#helpers/truncate/truncate.js';

import type { Parameters } from './parameters.ts';

const notifier = async (parameters: Parameters) => {
  const { icon, message, title } = parameters;

  const text = await truncate({ message });
  const heading = title.toUpperCase();

  try {
    return await new Promise((resolve, reject) => {
      Notifier.notify(
        {
          icon: fileURLToPath(new URL(`./icons/${icon}.png`, import.meta.url)),
          message: text,
          title: heading,
        },
        (error: unknown, response: unknown) => {
          if (error) {
            reject(error);

            return;
          }

          resolve(response);
        },
      );
    });
  } catch (error) {
    if (
      platform() !== 'darwin' ||
      !(error instanceof Error) ||
      !('errno' in error) ||
      error.errno !== -86
    ) {
      throw error;
    }

    return promisify(execFile)('/usr/bin/osascript', [
      '-e',
      'on run argv\ndisplay notification (item 1 of argv) ' +
        'with title (item 2 of argv)\nend run',
      '--',
      text,
      heading,
    ]);
  }
};

export { notifier };
