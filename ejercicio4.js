// items repetidos en un array
function encontrarRepetidos(arr) {
    let repetidos = [];
    let vistos = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (vistos.has(arr[i])) {
            if (!repetidos.includes(arr[i])) {
                repetidos.push(arr[i]);
            }
        } else {
            vistos.add(arr[i]);
        }
    }
    return repetidos;
}
console.log(encontrarRepetidos([1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 1]));