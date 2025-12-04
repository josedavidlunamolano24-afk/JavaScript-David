// suma de subconjuntos
function sumaSubconjuntos(arr, objetivo, indice = 0) {
  if (objetivo === 0) {
    return true;
    }
    if (indice >= arr.length || objetivo < 0) {
        return false;
    }
    if (sumaSubconjuntos(arr, objetivo - arr[indice], indice + 1)) {
        return true;
    }
    return sumaSubconjuntos(arr, objetivo, indice + 1);
}
console.log(sumaSubconjuntos([3, 34, 4, 12, 5, 2], 9));
console.log(sumaSubconjuntos([3, 34, 4, 12, 5, 2], 30));
console.log(sumaSubconjuntos([1, 2, 3, 4, 5], 10)); 
console.log(sumaSubconjuntos([1, 2, 3, 4, 5], 11)); 
console.log(sumaSubconjuntos([], 0));
console.log(sumaSubconjuntos([], 5));