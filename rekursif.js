// rekursif
function fibbonacci() {
  function fibonacci(n) {
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  const n = 3;
  console.log("hasil", fibonacci(n));
}
fibbonacci();

function faktorial() {
  function faktorial(n) {
    if (n < 2) {
      return n;
    } else {
      return n * faktorial(n - 1);
    }
  }
  const n = 5;
  console.log("hasil faktorial", faktorial(n));
}
faktorial();
