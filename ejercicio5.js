// generador de passwords
function generarPassword(longitud) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(indiceAleatorio);
    }
    return password;
}

console.log
(generarPassword(12));