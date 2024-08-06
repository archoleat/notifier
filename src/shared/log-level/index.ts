import { style } from '../style.ts';

import type { Parameters } from './parameters.d.ts';

const logLevel = async (parameters: Parameters) => {
  const { message, title } = parameters;

  if (title === 'ERROR') {
    return console.error(style.red(message));
  }

  if (title === 'WARNING') {
    return console.warn(style.yellow(message));
  }

  if (title === 'SUCCESS') {
    return console.log(style.green(message));
  }

  if (title === 'INFO') {
    return console.info(style.blue(message));
  }
};

export { logLevel };
