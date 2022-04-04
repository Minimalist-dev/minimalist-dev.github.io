var indice = 0;

class Diapositivas {
    static
    automaticas() {
        const diapositivas  = document.querySelectorAll(".diapositiva");
        const servicios     = document.querySelectorAll(".servicio");
        const desarrollos   = document.querySelectorAll(".desarrollo");

        for(let i = 0; i < diapositivas.length; i++) {
            diapositivas[i].style.display = "none";  
            diapositivas[i].classList.remove("activo");
            servicios[i].classList.remove("svg_titulo");
            desarrollos[i].classList.remove("dev_activio");
        }

        indice++;
        
        if(indice > diapositivas.length) { indice = 1; }   
        if(indice < 1)                   { indice = diapositivas.length; }

        diapositivas[indice - 1].style.display = "block";  
        diapositivas[indice - 1].classList.add("activo");
        servicios[indice - 1].classList.add("svg_titulo");
        desarrollos[indice - 1].classList.add("dev_activio");
 
        setTimeout(Diapositivas.automaticas, 4000);
    }
}

Diapositivas.automaticas();