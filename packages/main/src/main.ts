import { log } from '@mylib/logger';
import { util, capitalize, sum, groupBy } from '@mylib/util';

export const main = (): void => {
  log.info('This is the main package');
  log.warn('This is a warning message');
  log.error('This is an error message');
  util();

  // Demo utility functions
  const name = capitalize('john');
  log.info(`Capitalized name: ${name}`);

  const total = sum([1, 2, 3, 4, 5]);
  log.info(`Sum of numbers: ${total}`);

  const users = [
    { id: 1, role: 'admin', name: 'Alice' },
    { id: 2, role: 'user', name: 'Bob' },
    { id: 3, role: 'admin', name: 'Charlie' },
  ];
  const groupedByRole = groupBy(users, 'role');
  log.info('Users grouped by role:');
  log.info(JSON.stringify(groupedByRole, null, 2));
};
