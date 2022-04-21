import { URL, url } from "./header.js";

let email   = document.querySelector('#email');
let copiar  = document.querySelector('#copiar');
let dato    = document.querySelector('#dato');

class Contact {
    constructor() {
//        let urlES, urlEN;
//        import('./header.js').then(function(api) {
//            urlES = api.url.es[5];
//            urlEN = api.url.en[5];
//        });
    }
    static
    copiarCorreo() {
        dato.style.visibility = "visible";
        dato.style.opacity = "1";
    
        email.select();
        email.setSelectionRange(0, email.value.length);
        navigator.clipboard.writeText(email.value);
        
        if(URL === url.es[5]) {
            dato.innerHTML = "Copiado";
        } else if(URL === url.en[5]) {
            dato.innerHTML = "Copied";
        }
        
        setTimeout(function() {
            dato.style.visibility = "hidden";
            dato.style.opacity = "0";
        }, 4000);
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
    static
    tocar() {
        copiar.addEventListener("touchstart", Contact.copiarCorreo);
    }
}

/* Disparadores
--------------------------------------------------------------------------------*/
//new Contact();
Contact.entradas();
Contact.areaDeTexto();

copiar.onclick      = function() { Contact.copiarCorreo(); };
copiar.onmouseout   = function() { 
    if(URL === url.es[5]) { dato.innerHTML = "Copiar correo";   } 
    if(URL === url.en[5]) { dato.innerHTML = "Copy email";      }
};
  
document.addEventListener("DOMContentLoaded", Contact.tocar);
