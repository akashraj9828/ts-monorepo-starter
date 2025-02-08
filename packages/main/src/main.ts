import { log } from '@mylib/logger';
import { util } from '@mylib/util';

export const main = (): void => {
  log.info('This is the main package');
  log.warn('This is a warning message');
  log.error('This is an error message');
  util();
};
