// minimo comun multiplo
function mcm(a, b) {

  return (a * b) / mcd(a, b);
}

function mcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(mcm(7, 4));