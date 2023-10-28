// Se importa los arrays a utilizar
import { nombrespj, imagenes } from "./arrays.js";
let contador = 0;

// Se crea una funcion para enlazar con los detalles, y con
// el "e" se crea un evento para exportar el valor de contador
document.querySelector("#nombre").addEventListener("click", function (e) {
  enviar(e);
});
function enviar(e) {
  window.location.href =
    "./index2.html?contador=" + e.srcElement.attributes.key.value;
}

// Se definen las variables let
let nombre = document.querySelector("#nombre");
let imagen = document.querySelector("#imagen");
let botondh = document.getElementById("dh");
let botoniq = document.getElementById("iq");

//Se les establece funciones a los botones para recorrer las imagenes
botondh?.addEventListener("click", function () {
  sumar();
});
botoniq?.addEventListener("click", function () {
  restar();
});

// Event listener para establecer los colores a los botones
// y se usa el LocalStorage para mantener la imagen
window.addEventListener("load", function () {
  if(localStorage.getItem("valor_contador")){
    contador = parseInt(localStorage.getItem("valor_contador"))
    actualizar();
  }
  setBotonBackground();
});
function setBotonBackground() {
  if (contador == 0) {
    botoniq.setAttribute("disabled", "true")
  } else {
    botoniq.removeAttribute("disabled")
  }

  if (contador == 10) {
    botondh.setAttribute("disabled", "true")
  } else {
    botondh.removeAttribute("disabled")
  }
}

// Creo una funcion para recorrer las imagenes
// y con el condicional se crea un limite
function sumar() {
  if (contador < 10) {
    contador += 1;
    actualizar();
    setBotonBackground();
    nombre.setAttribute("key", contador);
  }
}
function restar() {
  if (contador > 0) {
    contador -= 1;
    actualizar();
    setBotonBackground();
    nombre.setAttribute("key", contador);
  }
}

// Establezco una actualizacion para que se ponga la imagen adecuada
function actualizar() {
  imagen.setAttribute("src", imagenes[contador]);
  nombre.innerText = nombrespj[contador];
  localStorage.setItem("valor_contador",contador);
}
