// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

(function euler005() {
  var n = 0;
  var i = 1;
  var maxDivisor = 20;
  var found = false;

  while (found === false) {
    // increments of largest integer divisor
    n += maxDivisor;

    // while n is divisible by i
    // and i is less than the largest divisor
    while (n % i === 0 && i <= maxDivisor) {
      // if i is equal to the largest divisor
      if (i === maxDivisor) {
        // then we've found the answer
        found = true;
      }
      i++;
    }

    // reset the index is n is not divisible by i
    i = 1;
  }

  console.log(n);
  return n;
}());
