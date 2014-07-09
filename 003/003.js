// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

(function euler003() {
  // starting index (first prime)
  var i = 2;
  var num = 600851475143;

  while (num > i) {
    if (num % i === 0) {
      num = num / i;
    }

    i++;
  }

  console.log(i);
  return i;
}());

// Limitations:
// Doesn't find all the prime factors
