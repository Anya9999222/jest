import { checkHealth } from '../index.js';

const dataList = [
  { name: 'мечник', health: 10, status: 'critical' },
  { name: 'маг', health: 100, status: 'healthy' },
  { name: 'лучник', health: 40, status: 'wounded' },
];

const handler = test.each(dataList);

handler('testing health checking function with %s name and %i health', (i) => {
  const result = checkHealth(i.health);
  expect(result).toBe(i.status);
});
