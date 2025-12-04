// sistema de recuento simple
function recuentoSimple(arr) {
    let conteo = {};
    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];
        if (!conteo[elemento]) {
            conteo[elemento] = 1;
        }
        else {
            conteo[elemento]++;
        }
    }
    return conteo;
}
console.log(recuentoSimple([1, 2, 2, 3, 3, 3]));
console.log(recuentoSimple(["a", "b", "a", "c", "b", "a"]));
console.log(recuentoSimple([]));
console.log(recuentoSimple([true, false, true, true]));
console.log(recuentoSimple(["apple", "banana", "apple", "orange"]));
console.log(recuentoSimple([1, 1, 1, 1, 1]));
