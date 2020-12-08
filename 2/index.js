import data from './data.js';

console.log(
  'part 1',
  data
    .map((item) => ({
      amount: item.split(' ')[0],
      char: item.split(' ')[1][0],
      password: item
        .split(' ')[2]
        .split('')
        .filter((char) => char === item.split(' ')[1][0])
        .join(''),
    }))
    .filter(
      (entry) =>
        entry.password.length >= entry.amount.split('-')[0] &&
        entry.password.length <= entry.amount.split('-')[1],
    ).length,
);

console.log(
  'part 2',
  data
    .map((item) => ({
      amount: item.split(' ')[0],
      char: item.split(' ')[1][0],
      password: item
        .split(' ')[2]
        .split('')
        .filter(
          (_, index) =>
            index === parseFloat(item.split(' ')[0].split('-')[0]) - 1 ||
            index === parseFloat(item.split(' ')[0].split('-')[1]) - 1,
        )
        .filter((char) => char === item.split(' ')[1][0])
        .join(''),
    }))
    .filter((entry) => entry.password.length === 1).length,
);
