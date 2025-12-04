// Filtrado de tablas
let filtro = document.getElementById("filtro");
filtro.addEventListener("keyup", function() {

    let texto = filtro.value.toLowerCase();
    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {

        let celdas = filas[i].getElementsByTagName("td");
        let mostrarFila = false;

        for (let j = 0; j < celdas.length; j++) {

            let contenidoCelda = celdas[j].innerText.toLowerCase();

            if (contenidoCelda.includes(texto)) {
                mostrarFila = true;
                break;
            }
        }
        if (mostrarFila) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
});
