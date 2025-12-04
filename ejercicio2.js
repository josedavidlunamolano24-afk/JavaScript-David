// reordenar aleatoreamente
let numeros = [1, 2, 3, 4, 5];

let mezclado = numeros.sort(() => Math.random() - 0.5);

console.log(mezclado);