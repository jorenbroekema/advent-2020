import data from './data.js';

console.log(
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
