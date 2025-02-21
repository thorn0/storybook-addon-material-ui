import { addons } from '@storybook/manager-api';

export function managerEntries(entry = []) {
  return [...entry, require.resolve("./register")];
}
