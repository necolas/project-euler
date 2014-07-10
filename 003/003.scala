var i = 2
var num = 600851475143L

while (num > i) {
  if (num % i == 0) num = num / i
  i += 1;
}

println(i);

i;
