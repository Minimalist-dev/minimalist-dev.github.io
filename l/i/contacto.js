let email   = document.querySelector('#email');
let copiar  = document.querySelector('#copiar');
let dato    = document.querySelector('#dato');

const URL_CONTACTO = window.location.pathname;

class Contact {
    static
    copiarCorreo() {
        email.select();
        email.setSelectionRange(0, email.value.length);
        navigator.clipboard.writeText(email.value);
        
        if(URL_CONTACTO === "/contacto") {
            dato.innerHTML = "Copiado";
        } else if(URL_CONTACTO === "/en/contact") {
            dato.innerHTML = "Copied";
        }
    }
    static
    entradas() {
        Array.from(document.querySelectorAll('form input')).forEach(function(i) {
            i.oninvalid  = function() { i.dataset.touched = true; };
            i.onblur     = function() { if (i.value !== '') i.dataset.touched = true; };
        });
    }
    static
    areaDeTexto() {
        let area = document.querySelector('textarea');
        
        area.oninvalid  = function() { area.dataset.touched = true; };
        area.onblur     = function() { if (area.value !== '') area.dataset.touched = true; };
    }
}

/* Disparadores
--------------------------------------------------------------------------------*/
Contact.entradas();
Contact.areaDeTexto();

copiar.onclick      = function() { Contact.copiarCorreo(); };
copiar.onmouseout   = function() { 
    if(URL_CONTACTO === "/contacto") {
        dato.innerHTML = "Copiar correo";
    } else if(URL_CONTACTO === "/en/contact") {
        dato.innerHTML = "Copy email";
    }
};
