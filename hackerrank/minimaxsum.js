function minimaxSum(arr) {
  let total = 0;
  for (let i of arr) {
    total = total + i;
  }

  let min = total - arr[0];
  let max = total - arr[0];

  for (let j of arr) {
    let tempMin = total - j;
    let tempMax = total - j;
    min = tempMin < min ? tempMin : min;
    max = tempMax > max ? tempMax : max;
  }

  return [min, max];
}

console.log(minimaxSum([1, 2, 3, 4, 5]));
console.log(minimaxSum([1, 3, 5, 7, 9]));
