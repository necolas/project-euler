// The sum of the squares of the first ten natural numbers is:
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is:
// (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 - 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

(function euler006() {
  var max = 100;
  var x = 0;
  var y = 0;
  var i = 0;
  var j = 0;

  (function sumOfSquares() {
    while (i <= max) {
      x += Math.pow(i, 2);
      i++;
    }
    return x;
  }());

  (function squareOfSums() {
    while (j <= max) {
      y += j;
      j++;
    }
    y = Math.pow(y, 2);
    return y;
  }());

  console.log(y - x);
  return y - x;
}());
