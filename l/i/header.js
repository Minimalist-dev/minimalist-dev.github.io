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
const url   = {
    es: [
        "/github/minimalist-dev.github.io/",
        "/github/minimalist-dev.github.io/index.html",
        "/github/minimalist-dev.github.io/desarrollo-web.html",
        "/github/minimalist-dev.github.io/mantenimiento-web.html",
        "/github/minimalist-dev.github.io/asesoria-web.html",
        "/github/minimalist-dev.github.io/contacto.html"
    ],
    en: [
        "/github/minimalist-dev.github.io/en/",
        "/github/minimalist-dev.github.io/en/index.html",
        "/github/minimalist-dev.github.io/en/web-development.html",
        "/github/minimalist-dev.github.io/en/web-maintenance.html",
        "/github/minimalist-dev.github.io/en/web-consultancy.html",
        "/github/minimalist-dev.github.io/en/contact.html"
    ]
};
//const url = {
//    es: [
//        "/",
//        "/index.html",
//        "/desarrollo-web.html",
//        "/mantenimiento-web.html",
//        "/asesoria-web.html",
//        "/contacto.html"
//    ],
//    en: [
//        "/en/",
//        "/en/index.html",
//        "/en/web-development.html",
//        "/en/web-maintenance.html",
//        "/en/web-consultancy.html",
//        "/en/contact.html"
//    ]
//};

class Header {
    constructor() {
        for(let i in url.es) {
            if(URL === url.es[i] || URL === url.en[i]) {
                if(i === "0" || i === "1")  { _url = 1; } 
                else if(i === "2")          { _url = 2; } 
                else if(i === "3")          { _url = 3; } 
                else if(i === "4")          { _url = 4; }
            } 
        }

        switch(URL) {
            case url.es[5]:
            case url.en[5]:
                document.querySelector(".header_7").style.color = "var(--n-color-3)";
                break;
            default:
                Header.media();
                H1.addListener(Header.media);
                H2.addListener(Header.media);
                H3.addListener(Header.media);
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
        
        for(let i in url.es) {
            let es = url.es[i].split("/");
            let en = url.en[i].split("/");
            
            if(URL === url.es[i] || URL === url.en[i]) {
                if(idiomas.innerHTML === "Seleccionar idioma") {
                    idioma.innerHTML = `<a href="${es[3]}">Español</a><a href="en/${en[4]}">English</a>`;
                    idiomas.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
                } else if(idiomas.innerHTML === "Select language") {
                    idioma.innerHTML = `<a href="../${es[3]}">Español</a><a href="${en[4]}">English</a>`;
                    idiomas.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
                } else {
                    idioma.innerHTML = "";

                    if(URL.substr(0, 36) === "/github/minimalist-dev.github.io/en/") {
                        idiomas.innerHTML = "Select language";
                    } else {
                        idiomas.innerHTML = "Seleccionar idioma";
                    }
                }
//                if(idiomas.innerHTML === "Seleccionar idioma") {
//                    idioma.innerHTML = `<a href="${es[1]}">Español</a><a href="en/${en[2]}">English</a>`;
//                    idiomas.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
//                } else if(idiomas.innerHTML === "Select language") {
//                    idioma.innerHTML = `<a href="../${es[1]}">Español</a><a href="${en[2]}">English</a>`;
//                    idiomas.innerHTML = "<i class='fa fa-times-circle' style='color: var(--n-color-6);'></i>";
//                } else {
//                    idioma.innerHTML = "";
//
//                    if(URL.substr(0, 4) === "/en/") {
//                        idiomas.innerHTML = "Select language";
//                    } else {
//                        idiomas.innerHTML = "Seleccionar idioma";
//                    }
//                }
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
export { URL, url };
