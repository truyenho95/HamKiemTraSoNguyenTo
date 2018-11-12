var list = [];

function isPrime (n) {
  var divisible = 0;
  for (var j = 2; j <= n; j++) {
    if (!(i%j)) divisible += 1;
  }
  if (divisible===1)
    list.push(n);
  return list;
}

for (var i=2; i<=10000; i++)
  isPrime(i);

for (var i=0; i<list.length; i++) {
  if (i==list.length-1)
    document.write(`${list[i]}.`);
  else
    document.write(`${list[i]}, `);
}