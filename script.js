const textArea = document.querySelector(".section1_entrada");
const muneco = document.querySelector(".resultado_img");
const resultadoTitulo = document.querySelector(".resultado_titulo");
const resultadoTexto = document.querySelector(".prueba");
const botonEncriptar = document.querySelector(".botones");
const botonDesencriptar = document.querySelectorAll(".botones");
const botonCopiar = document.querySelector(".resultado_btn");
const prueba = document.querySelector(".prueba")


const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Filtro de caracteres
textArea.addEventListener('input', function (event) {
    this.value = this.value.replace(/[^a-z0-9.,¡!()¿?{}<>'-;:\s]/g, ''); // Permite letras minúsculas, números y puntuación específica
  });

function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";

    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let palabraEncriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if (letra === llaves[j][0]) {
                palabraEncriptada = llaves[j][1]; //Reemplaza la letra por su equivalente encriptado
                break; //Termina el bucle cuando se encuentra la correspondencia
            }
        }
        mensajeEncriptado += palabraEncriptada;
    }
    
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

// Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    muneco.style.display = "none";
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "Tu texto encriptado es:";
    prueba.classList.remove("hidden");
})

botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    muneco.style.display = "none";
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "Tu texto desencriptado es:";
    prueba.classList.remove("hidden");
})

botonCopiar.addEventListener("click", (e)=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        muneco.style.display = "block";
        resultadoTitulo.textContent = "El texto fue copiado";
        botonCopiar.classList.add("hidden");
        prueba.classList.add("hidden");
        resultadoTexto.textContent = "";
    })
})
