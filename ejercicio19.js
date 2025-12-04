// Paréntesis, llaves, corchetes ¿correctos?
function estanBalanceados(cadena) {
  let pila = [];
  let mapa = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
    for (let char of cadena) {
        if (mapa[char]) {
            pila.push(char);
        } else if (Object.values(mapa).includes(char)) {
            let ultimo = pila.pop();
            if (mapa[ultimo] !== char) {
                return false;
            }
        }
    }
    return pila.length === 0;
}
console.log(estanBalanceados("(){}[]")); // true
console.log(estanBalanceados("([{}])")); // true
console.log(estanBalanceados("(}"));     // false
console.log(estanBalanceados("((()))")); // true