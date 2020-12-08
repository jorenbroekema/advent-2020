import data from './data.js';

const matrix = data.split(/\r?\n/).map((row) => row.split(''));
const patternWidth = matrix[0].length;

function checkSlope(rightPerDown) {
  let downPerRight = 1;
  if (rightPerDown < 1) {
    downPerRight = 1 / rightPerDown;
  }
  let treeCount = 0;
  for (let i = downPerRight; i < matrix.length; i += downPerRight) {
    if (matrix[i][(i * rightPerDown) % patternWidth] === '#') {
      treeCount++;
    }
  }
  return treeCount;
}

const slopes = [1, 3, 5, 7, 0.5];
const trees = slopes.map((slope) => checkSlope(slope)).reduce((acc, curr) => acc * curr);

console.log(trees);
