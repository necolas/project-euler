// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function euler003( num ) {
    // starting index (first prime)
    var i = 2;

    // while the number to process is greater than the index
    while ( num > i ) {
        // if the index is a factor of the number
        if ( num % i === 0 ) {
            // then divide by the index
            num = num / i;
            console.log('num is: ' + num);
        }

        // increment the index
        i++;
        console.log('i is: ' + i);
    }

    // return the greatest factor that is only divisible by itself
    return i;
}

// Limitations:
// Doesn't find all the prime factors
