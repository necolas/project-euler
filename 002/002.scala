var fib = Array(1, 2)
var sum = 0

def calc(arr: Array[Int]): Int = {
  arr(arr.length - 1) + arr(arr.length - 2)
}

while ({ fib(fib.length - 1) < 4e+6 }) {
  fib :+= calc(fib)
}

fib.foreach((n: Int) => {
  if (n % 2 == 0) {
    sum += n;
  }
})

println(sum)

sum
