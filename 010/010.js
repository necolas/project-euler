// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

(function euler010() {
  var maxPrimeValue = 2e+6;
  var i = maxPrimeValue;
  var sum = 0;

  // while primes is less than the sought after number
  while (i >= 2) {
    if (isPrime(i) === true) {
      sum += i;
    }

    i--;
  }

  function isPrime(n) {
    var x = Math.floor(Math.sqrt(n));
    var j = x;

    while (j >= 2) {
      if (n % j === 0) {
        return false;
      }
      j--;
    }

    return true;
  }

  console.log(sum);
  return sum;
}());
