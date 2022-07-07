import { URL, url } from "../i/header.js";

let req = document.querySelector('#contacto');
let res = document.querySelector('#res');

let nombre  = document.querySelector('#nombre');
let correo  = document.querySelector('#correo');
let tema    = document.forms['contacto']['tema'];
let asunto  = document.querySelector('#asunto');
let mensaje = document.querySelector('#mensaje');
let submit  = document.querySelector('#submit');

class Contacto {
    static
    insertar() {
        let datos = JSON.stringify({
            nombre: nombre.value, 
            correo: correo.value, 
            tema: tema.value, 
            asunto: asunto.value, 
            mensaje: mensaje.value,
            submit: submit.value
        });
        
        fetch('https://minimalist-dev.herokuapp.com/oking', {
//        fetch('http://localhost:3000/oking', {
            headers: { 
                'Content-Type': 'application/json' 
            },
            method: 'POST',
            body: datos
        }).then(function(response) {
            if(response.ok) { return response.text(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) {
            req.reset();

            switch(URL) {
                case url.es[5]:
                    switch(json.length) {
                        case 8: res.innerHTML = "<p>Su mensaje a sido recibido.</p>"; break;
                        case 16: res.innerHTML = "<p style='color: var(--n-color-6)'>Escriba según el formato.</p>"; break;
                    } break;
                case url.en[5]:
                    switch(json.length) {
                        case 8: res.innerHTML = "<p>Your message has been received.</p>";break;
                        case 16: res.innerHTML = "<p style='color: var(--n-color-6)'>Write according to the format.</p>"; break;
                    } break;
            }
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        });
    }
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
req.onsubmit = function(evento) {
    evento.preventDefault();
    Contacto.insertar();
};
mensaje.oninput = function() {
    Contacto.validarTextArea(mensaje.value); 
};

