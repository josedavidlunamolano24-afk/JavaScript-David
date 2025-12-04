// Combinaciones de caracteres
function combinaciones(cadena) {
  let resultado = [];
    let n = cadena.length;
    let totalCombinaciones = 1 << n;
    for (let i = 0; i < totalCombinaciones; i++) {
        let subcadena = '';
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subcadena += cadena[j];
            }
        }
        resultado.push(subcadena);
    }
    return resultado;
}
console.log(combinaciones("carro"));
console.log(combinaciones("avion"));
console.log(combinaciones("mt-09"));
