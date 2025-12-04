//Permutaciones de caracteres
function permutaciones(cadena) {
  if (cadena.length === 0) return [''];
    let resultado = [];
    for (let i = 0; i < cadena.length; i++) {
        let letraActual = cadena[i];
        let letrasRestantes = cadena.slice(0, i) + cadena.slice(i + 1);
        let subPermutaciones = permutaciones(letrasRestantes);
        for (let sub of subPermutaciones) {
            resultado.push(letraActual + sub);
        }
    }
    return resultado;
}
console.log(permutaciones("abc"));
console.log(permutaciones("gato"));
console.log(permutaciones("a"));
console.log(permutaciones(""));
console.log(permutaciones("perro"));