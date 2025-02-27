function isPrime(num: number) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function* getPrimeNumber() {
  let num = 2;
  while (true) {
    if (isPrime(num)) {
      yield num;
    }
    num++;
  }
}

export default getPrimeNumber;
