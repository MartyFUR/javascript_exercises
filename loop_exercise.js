

function getEvenNumbers(arr) {
  const evens = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));    // → [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25, 30]));  // → [10, 20, 30]
console.log(getEvenNumbers([-3, -2, 0, 7, 8]));     // → [-2, 0, 8]
console.log(getEvenNumbers([]));                    // → []
