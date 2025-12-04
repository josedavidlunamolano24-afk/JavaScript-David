// insertar ceros en una lista
function insertarCeros(lista) {
  let nueva = [];

  for (let i = 0; i < lista.length; i++) {
    let num = lista[i];

    nueva.push(num);

    if (num % 2 === 0) {
      nueva.push(0);
    }
  }

  return nueva;
}
console.log(insertarCeros([1, 2, 3, 4, 5]));
console.log(insertarCeros([10, 15, 20]));
console.log(insertarCeros([7, 9, 11]));
console.log(insertarCeros([]));
console.log(insertarCeros([0, 2, 4, 6]));