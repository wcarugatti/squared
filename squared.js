/**
2 - Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
Sample Input

  array = [1, 2, 3, 5, 6, 8, 9]

Sample Output

    [1, 4, 9, 25, 36, 64, 81]
est Case 1

{
  "array": [1, 2, 3, 5, 6, 8, 9]
}

Output

    [1, 4, 9, 25, 36, 64, 81]

Test Case 2

{
    "array": [-2, -1]
}

Output

    [1, 4]
Mauricio Quezada10:41
Test Case 3

  "array": [-10, -5, 0, 5, 10]

Output

    [0, 25, 25, 100, 100]
*/

function squaredArray(arr) {
  return arr.map((el) => el * el).sort((a, b) => a - b);
}

console.log(squaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(squaredArray([-2, -1]));
console.log(squaredArray([-10, -5, 0, 5, 10]));
