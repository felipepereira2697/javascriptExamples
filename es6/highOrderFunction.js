const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr;
  let mapSquaredIntegers = squaredIntegers.filter((numbers) => numbers > 0 && Number.isInteger(numbers)).map(x => Math.pow(x,2));
  return mapSquaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);