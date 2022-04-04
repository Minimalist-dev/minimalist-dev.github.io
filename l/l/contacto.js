let req     = document.querySelector('#contacto');

let nombre  = document.querySelector('#nombre');
let correo  = document.querySelector('#correo');
let tema    = document.forms['contacto']['tema'];
let asunto  = document.querySelector('#asunto');
let mensaje = document.querySelector('#mensaje');
let submit  = document.querySelector('#submit');

let modal   = document.querySelector("#enviar");
let cerrar  = document.querySelector("#cerrar");

class Contacto {
    static
    validarTextArea(mensaje) {
        const TEXT_AREA = /^[0-9A-Za-záéíóúÁÉÍÓÚñÑ\s,.¿?¡!@#]{10,141}$/;
        let testing     = TEXT_AREA.test(mensaje);
        
        if(testing === true) {
            submit.disabled = false;
            submit.style.opacity = "1.0";
        } else {
            submit.disabled = true;
            submit.style.opacity = "0.5";
        }
    }
}

/* Disparadores
--------------------------------------------------------------------------------*/
mensaje.oninput = function() {
    Contacto.validarTextArea(mensaje.value); 
};
req.onsubmit = function(evento) {
    evento.preventDefault();
    
    modal.style.display = "block";
    
    document.querySelector("#subject").innerHTML = asunto.value;
    document.querySelector("#message").innerHTML = mensaje.value;
};
cerrar.onclick = function() {
    modal.style.display = "none";
};

