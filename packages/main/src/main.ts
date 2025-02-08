import { logger } from '@mylib/logger';
import { util } from '@mylib/util';

export const main = (): void => {
  console.log('This is the main package');
  logger();
  util();
}; 