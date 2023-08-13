function rotateArray(arr, n) {
  let newN = n < arr.length ? n : n % arr.length;
  for (let i = 1; i <= newN; i++) {
    arr.push(arr[0]);
    arr.shift();
  }

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 14));
console.log(rotateArray([1, 2, 3, 4, 5], 4));
