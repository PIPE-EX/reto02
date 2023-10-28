// Se importa los arrays a utilizar
import { nombrespj, detalles, imagenes } from "./arrays.js";
// Se define una variable importada
let contador = window.location.search.split("=")[1];

// Se crea una funcion para regresar a la pagina ppal
// Se usa DOMContentLoaded para cargar el HTML primero
document.addEventListener("DOMContentLoaded", function () {
  let atras = document.getElementById("volver");
  atras.addEventListener("click", function () {
    redirigir();
  });
  function redirigir() {
    window.location.href = "./index.html?contador=" + contador;
  }
  // Se definen las variables let
  let detalle = document.querySelector("#detalle");
  let imagen = document.querySelector("#imagen");
  let nombre = document.querySelector("#nombre");

  imagen.setAttribute("src", imagenes[contador]);
  nombre.innerText = nombrespj[contador];
  detalle.innerText = detalles[contador];
});
