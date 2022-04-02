/* header
--------------------------------------------------------------------------------*/
let idiomas     = document.querySelector("#idiomas");
let menuTablet  = document.querySelector(".menu_tablet");
let menuCelular = document.querySelector(".menu_celular");

const URL   = window.location.pathname;
const H1    = window.matchMedia("(min-width: 801px)");
const H2    = window.matchMedia("(min-width: 551px) and (max-width: 800px)");
const H3    = window.matchMedia("(max-width: 550px)");
console.log(URL);
class Navegacion {
    constructor() {
        switch(URL) {
            case "/github/minimalist-dev.github.io/index.html":
            case "/github/minimalist-dev.github.io/desarrollo-web.html":
            case "/github/minimalist-dev.github.io/mantenimiento-web.html":
            case "/github/minimalist-dev.github.io/asesoria-web.html":
            case "/github/minimalist-dev.github.io/en/index.html":
            case "/github/minimalist-dev.github.io/en/web-development.html":
            case "/github/minimalist-dev.github.io/en/web-maintenance.html":
            case "/github/minimalist-dev.github.io/en/web-consultancy.html":
                Navegacion.mediaUno(H1);
                H1.addListener(Navegacion.mediaUno);
                Navegacion.mediaDos(H2);
                H2.addListener(Navegacion.mediaDos);
                Navegacion.mediaTres(H3);
                H3.addListener(Navegacion.mediaTres);
                break;
            case "/github/minimalist-dev.github.io/contacto.html":
            case "/github/minimalist-dev.github.io/en/contact.html":
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
            menuTablet.innerHTML = "<i class='fas fa-times-circle' style='color: var(--n-color-6);'></i>";
        } else { 
            menuTablet.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`;
        }
        
        Navegacion.lanzar(detonador);
    }
    static
    celular() {
        let detonador = document.querySelector(".minimo");
        
        if(menuCelular.innerHTML === `<i class="fa fa-bars" aria-hidden="true"></i>`) { 
            menuCelular.innerHTML = "<i class='fas fa-times-circle' style='color: var(--n-color-6);'></i>";
        } else { 
            menuCelular.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`;
        }
        
        Navegacion.lanzar(detonador);   
    }
    static
    idioma() {
        let idioma = document.querySelector("#idioma");
        
        if(idiomas.innerHTML === "Seleccionar idioma" || idiomas.innerHTML === "Select language") {
            idioma.innerHTML = `<a href="/github/minimalist-dev.github.io/index.html">Español</a><a href="/github/minimalist-dev.github.io/en/index.html">English</a>`;
            idiomas.innerHTML = "<i class='fas fa-times-circle' style='color: var(--n-color-6);'></i>";
        } else {
            idioma.innerHTML = "";
            
            if(URL.substr(0,4) === "/github/minimalist-dev.github.io/en/index.html") {
                idiomas.innerHTML = "Select language";
            } else {
                idiomas.innerHTML = "Seleccionar idioma";
            }
        }
    }
    static 
    mediaUno(H1) {
        if(H1.matches && URL === "/github/minimalist-dev.github.io/index.html" || H1.matches && URL === "/github/minimalist-dev.github.io/en/index.html") {
            document.querySelector(".header_11").style.color = "var(--n-color-3)";
        } else if(H1.matches && URL === "/github/minimalist-dev.github.io/desarrollo-web.html" || H1.matches && URL === "/github/minimalist-dev.github.io/en/web-development.html") {
            document.querySelector(".header_21").style.color = "var(--n-color-3)";
        } else if(H1.matches && URL === "/github/minimalist-dev.github.io/mantenimiento-web.html" || H1.matches && URL === "/github/minimalist-dev.github.io/en/web-maintenance.html") {
            document.querySelector(".header_31").style.color = "var(--n-color-3)";
        } else if(H1.matches && URL === "/github/minimalist-dev.github.io/asesoria-web.html" || H1.matches && URL === "/github/minimalist-dev.github.io/en/web-consultancy.html") {
            document.querySelector(".header_41").style.color = "var(--n-color-3)";
        } 
    }
    static 
    mediaDos(H2) {
        if(H2.matches && URL === "/github/minimalist-dev.github.io/index.html" || H2.matches && URL === "/github/minimalist-dev.github.io/en/index.html") {
            document.querySelector(".header_12").style.color = "var(--n-color-3)";
        } else if(H2.matches && URL === "/github/minimalist-dev.github.io/desarrollo-web.html" || H2.matches && URL === "/github/minimalist-dev.github.io/en/web-development.html") {
            document.querySelector(".header_22").style.color = "var(--n-color-3)";
        } else if(H2.matches && URL === "/github/minimalist-dev.github.io/mantenimiento-web.html" || H2.matches && URL === "/github/minimalist-dev.github.io/en/web-maintenance.html") {
            document.querySelector(".header_32").style.color = "var(--n-color-3)";
        } else if(H2.matches && URL === "/github/minimalist-dev.github.io/asesoria-web.html" || H2.matches && URL === "/github/minimalist-dev.github.io/en/web-consultancy") {
            document.querySelector(".header_42").style.color = "var(--n-color-3)";
        }
    }
    static 
    mediaTres(H3) {
        if(H3.matches && URL === "/github/minimalist-dev.github.io/index.html" || H3.matches && URL === "/github/minimalist-dev.github.io/en/index.html") {
            document.querySelector(".header_13").style.color = "var(--n-color-3)";
        } else if(H3.matches && URL === "/github/minimalist-dev.github.io/desarrollo-web.html" || H3.matches && URL === "/github/minimalist-dev.github.io/en/web-development.html") {
            document.querySelector(".header_23").style.color = "var(--n-color-3)";
        } else if(H3.matches && URL === "/github/minimalist-dev.github.io/mantenimiento-web.html" || H3.matches && URL === "/github/minimalist-dev.github.io/en/web-maintenance.html") {
            document.querySelector(".header_33").style.color = "var(--n-color-3)";
        } else if(H3.matches && URL === "/github/minimalist-dev.github.io/asesoria-web.html" || H3.matches && URL === "/github/minimalist-dev.github.io/en/web-consultancy.html") {
            document.querySelector(".header_43").style.color = "var(--n-color-3)";
        }
    }
}

/* header: disparadores
--------------------------------------------------------------------------------*/
new Navegacion();

idiomas.onclick = function() {
    Navegacion.idioma();
};

