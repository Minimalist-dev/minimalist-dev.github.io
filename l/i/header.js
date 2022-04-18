/* header
--------------------------------------------------------------------------------*/
let idiomas     = document.querySelector("#idiomas");
let menuTablet  = document.querySelector(".menu_tablet");
let menuCelular = document.querySelector(".menu_celular");

const URL   = window.location.pathname;
const H1    = window.matchMedia("(min-width: 801px)");
const H2    = window.matchMedia("(min-width: 551px) and (max-width: 800px)");
const H3    = window.matchMedia("(max-width: 550px)");

let _url    = 0;
//const url   = {
//    uno: [
//        "/github/minimalist-dev.github.io/",
//        "/github/minimalist-dev.github.io/index.html",
//        "/github/minimalist-dev.github.io/en/index.html",
//        "/github/minimalist-dev.github.io/desarrollo-web.html",
//        "/github/minimalist-dev.github.io/en/web-development.html",
//        "/github/minimalist-dev.github.io/mantenimiento-web.html",
//        "/github/minimalist-dev.github.io/en/web-maintenance.html",
//        "/github/minimalist-dev.github.io/asesoria-web.html",
//        "/github/minimalist-dev.github.io/en/web-consultancy.html"
//    ],
//    dos: [
//        "/github/minimalist-dev.github.io/contacto.html", 
//        "/github/minimalist-dev.github.io/en/contact.html"
//    ]
//};
const url = {
    uno: [
        "/",
        "/index.html",
        "/en/index.html",
        "/desarrollo-web.html",
        "/en/web-development.html",
        "/mantenimiento-web.html",
        "/en/web-maintenance.html",
        "/asesoria-web.html",
        "/en/web-consultancy.html"
    ],
    dos: [
        "/contacto.html", 
        "/en/contact.html"
    ]
};

class Header {
    constructor() {
        url.uno.find(function(element, index, array) {
            if(element === URL) {
                if(index === 0 || index === 1 || index === 2)   { _url = 1; } 
                else if(index === 3 || index === 4)             { _url = 2; } 
                else if(index === 5 || index === 6)             { _url = 3; } 
                else if(index === 7 || index === 8)             { _url = 4; }
            } 

            return element === URL;
        });

        switch(true) {
            case url.uno.includes(URL):
                Header.media();
                H1.addListener(Header.media);
                H2.addListener(Header.media);
                H3.addListener(Header.media);
                break;
            case url.dos.includes(URL):
                document.querySelector(".header_7").style.color = "var(--n-color-3)";
                break;
        }
    }
    static
    lanzar(detonador) {
        detonador.style.display === "block" ? detonador.style.display = "none" : detonador.style.display = "block";        
    }
    static
    tablet() {
        let detonador = document.querySelector(".mediano");
        
        if(menuTablet.innerHTML === `<i class="fa fa-bars" aria-hidden="true"></i>`) { 
            menuTablet.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
        } else { 
            menuTablet.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`;
        }
        
        Header.lanzar(detonador);
    }
    static
    celular() {
        let detonador = document.querySelector(".minimo");
        
        if(menuCelular.innerHTML === `<i class="fa fa-bars" aria-hidden="true"></i>`) { 
            menuCelular.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
        } else { 
            menuCelular.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`;
        }
        
        Header.lanzar(detonador);   
    }
    static
    idioma() {
        let idioma = document.querySelector("#idioma");
        
        if(idiomas.innerHTML === "Seleccionar idioma") {
            idioma.innerHTML = `<a href="index.html">Español</a><a href="en/index.html">English</a>`;
            idiomas.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
        } else if(idiomas.innerHTML === "Select language") {
            idioma.innerHTML = `<a href="../index.html">Español</a><a href="index.html">English</a>`;
            idiomas.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
        } else {
            idioma.innerHTML = "";
            
            if(URL.substr(0,4) === "/en/") {
                idiomas.innerHTML = "Select language";
            } else {
                idiomas.innerHTML = "Seleccionar idioma";
            }
        }
    }
    static
    media() {
        for(let i = 1; i < 5; i++) {
            if(H1.matches && i === _url) { document.querySelector(".header_" + i + 1).style.color = "var(--n-color-3)"; } 
            if(H2.matches && i === _url) { document.querySelector(".header_" + i + 2).style.color = "var(--n-color-3)"; } 
            if(H3.matches && i === _url) { document.querySelector(".header_" + i + 3).style.color = "var(--n-color-3)"; }
        }
    }
};

/* header: disparadores
--------------------------------------------------------------------------------*/
new Header();

idiomas.onclick = function() {
    Header.idioma();
};
menuTablet.onclick = function() {
    Header.tablet();
};
menuCelular.onclick = function() {
    Header.celular();
};

/* header: exportaciones
--------------------------------------------------------------------------------*/
export { url };
