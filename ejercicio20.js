// Cifrado César
function cifradoCesar(texto, desplazamiento) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        let nuevoCharCode = charCode + desplazamiento;
        resultado += String.fromCharCode(nuevoCharCode);
    }
    return resultado;
}
console.log(cifradoCesar("hola", 3));
console.log(cifradoCesar("abc", 1));
console.log(cifradoCesar("XYZ", 2));