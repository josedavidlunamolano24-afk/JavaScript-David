// Dividir frases sin guiones
function dividirFrasesSinGuiones(texto) {
  let frases = texto.split('.');
    let frasesSinGuiones = frases.filter(frase => !frase.includes('-'));
    return frasesSinGuiones.map(frase => frase.trim()).filter(frase => frase.length > 0);
}
let texto = "Esta es la primera frase. Esta es la segunda-frase. Aquí hay otra frase. Y esta-frase tiene un guion.";
console.log(dividirFrasesSinGuiones(texto));




