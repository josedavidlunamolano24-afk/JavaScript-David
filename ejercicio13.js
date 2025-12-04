// encontrar una cadena dentro de otra cadena

function cadMinima(muestra, palabra) {
  let conteoMuestra = {};

  for (let i = 0; i < muestra.length; i++) {
    let letra = muestra[i];
    if (!conteoMuestra[letra]) {
      conteoMuestra[letra] = 1;
    } else {
      conteoMuestra[letra]++;
    }
  }

  let mejor = null;
  for (let inicio = 0; inicio < palabra.length; inicio++) {
    let conteoTemp = {};

    for (let fin = inicio; fin < palabra.length; fin++) {
      let letra = palabra[fin];

      if (!conteoTemp[letra]) {
        conteoTemp[letra] = 1;
      } else {
        conteoTemp[letra]++;
      }
      let cumple = true;

      for (let l in conteoMuestra) {
        if (!conteoTemp[l] || conteoTemp[l] < conteoMuestra[l]) {
          cumple = false;
          break;
        }
      }

      if (cumple) {
        let sub = palabra.substring(inicio, fin + 1);
        if (mejor === null || sub.length < mejor.length) {
          mejor = sub;
        }

        break;
      }
    }
  }

  return mejor;
}
console.log(cadMinima("nasa", "antesala"));
console.log(cadMinima("nesa", "antesala"));  
console.log(cadMinima("lol", "holalolazo"));  
console.log(cadMinima("taza", "metazafuego")); 
console.log(cadMinima("abc", "xxabcyyabcx")); 
