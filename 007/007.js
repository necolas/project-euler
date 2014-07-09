// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.

// What is the 10,001st prime number?

(function euler007() {
  var primes = [2];
  var i = 3;
  var j = 2;
  var maxPrimes = 10001;

  // while primes is less than the sought after number
  while (primes.length < maxPrimes) {
    // while i divided by j has a remainder,
    // indicating it could still be a prime
    while (i % j !== 0) {
      j++;
      // if we're reached the point where j === i,
      // then it must be a prime
      if ( j === i ) {
        primes.push(i);
        break;
      }
    }

    // otherwise, increment i and reset j;
    i++;
    j = 2;
  }

  console.log(primes[maxPrimes - 1]);
  return primes[maxPrimes - 1];
}());
