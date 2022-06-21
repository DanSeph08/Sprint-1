//Encriptar
const captura = document.querySelector("#text-input");
const inputResultado = document.querySelector("#texto-oculto");
let resultado = document.querySelector("#texto-ingresado");
let ningunMensaje = document.querySelector("#texto-encontrado");
resultado.style.display = "none";

//Boton Encriptar
function codificar(){
    const textoEncriptado = encriptar(captura.value);
    inputResultado.value = textoEncriptado;
    resultado.style.display = "block";
    ningunMensaje.style.display = "none";
    alert("Texto encriptado");
}

//Funcion Encriptar
function encriptar(codificar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for( let i=0; i<matrizCodigo.length; i++){
        if (codificar.includes(matrizCodigo[i][0])){
            codificar = codificar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return codificar;
}

//Desencriptar

//Boton Desencriptar
function decodificar(){
    const textoDesencriptado = desencriptar(captura.value);
    inputResultado.value = textoDesencriptado;
    resultado.style.display = "grid";
    ningunMensaje.style.display = "none";
    alert("Texto desencriptado");
}

//Funcion Desencriptar
function desencriptar(decodificar){
    let matrizCodigo = [["enter", "e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]];
    for( let i=0; i<matrizCodigo.length; i++){
        if (decodificar.includes(matrizCodigo[i][0])){
            decodificar = decodificar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return decodificar;
}

//Copiar

//Boton Copiar
function Copiar(){
    inputResultado.select();
    inputResultado.setSelectionRange(0,99999);
    navigator.clipboard.writeText(inputResultado.value);
        alert ("¡Mensaje copiado al portapapeles!");
        inputResultado.value=("");
}

//Validar Input

const inputBlocked = document.querySelector("#text-input");

inputBlocked.addEventListener("keypress", function(mayus){

    if (!checkText(mayus)){
        mayus.preventDefault();
        alert("solo minúsculas sin acentos ni saltos de línea")
    }
})

function checkText(mayus){
    const char = String.fromCharCode(mayus.keyCode);

    if (char.match("[a-z]")) {
        return(true);
    }
}