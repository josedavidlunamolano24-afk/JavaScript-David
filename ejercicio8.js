// Frecuencia de caracteres
function frecuenciaCaracteres(cadena) {
  const frecuencia = {};
    for (let char of cadena) {
        frecuencia[char] = (frecuencia[char] || 0) + 1;
    }
    return frecuencia;
}
console.log(frecuenciaCaracteres("programacion"));
