var n = 0
var i = 1
val maxDivisor = 20
var found: Boolean = false

while (found == false) {
  // increments of largest integer divisor
  n += maxDivisor

  // while n is divisible by i
  // and i is less than the largest divisor
  while (n % i == 0 && i <= maxDivisor) {
    // if i is equal to the largest divisor
    if (i == maxDivisor) {
      // then we've found the answer
      found = true
    }
    i += 1
  }

  // reset the index is n is not divisible by i
  i = 1
}

println(n)
n
