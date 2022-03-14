const numbers = [3, 5, 6, 11, 13];
const target = 19;

type result = [number, number];

function findPair(pool: number[], target: number): result {
  let tempMap = {};
  let result: result = [0, 0];
  for (let i = 0; i < pool.length; i++) {
    if (tempMap[pool[i]]) {
      result = [target - pool[i], pool[i]];
      break;
    }
    tempMap[target - pool[i]] = 1;
  }
  return result;
}
console.log(findPair(numbers, target));
