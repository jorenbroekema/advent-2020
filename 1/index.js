import data from './data.js';

const runPart1 = () => {
  let output;
  let computations = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      computations++;
      if (data[i] + data[j] === 2020) {
        output = data[i] * data[j];
        console.log(`computations: ${computations} for data length ${data.length}`);
        return output;
      }
    }
  }
};

const runPart2 = () => {
  let output;
  let computations = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      for (let k = j + 1; k < data.length; k++) {
        computations++;
        if (data[i] + data[j] + data[k] === 2020) {
          output = data[i] * data[j] * data[k];
          console.log(`computations: ${computations} for data length ${data.length}`);
          return output;
        }
      }
    }
  }
};
console.log(runPart1());
console.log(runPart2());
