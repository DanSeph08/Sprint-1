var inputFrase = document.querySelector('.texto-oculto');
var boton = document.querySelector('.boton');
var copia = document.querySelector(".copia");

function botonHandler() {

    copia.textContent = inputFrase.value;
    inputFrase.value = "";
}

boton.addEventListener('click', botonHandler);