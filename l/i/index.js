var indice = 0;

class Diapositivas {
    static
    automaticas() {
        const diapositivas = document.querySelectorAll(".diapositiva");

        for(let i = 0; i < diapositivas.length; i++) {
            diapositivas[i].style.display = "none";  
            diapositivas[i].classList.remove("activo");
        }

        indice++;
        
        if(indice > diapositivas.length) { indice = 1; }   
        if(indice < 1)                   { indice = diapositivas.length; }

        diapositivas[indice - 1].style.display = "block";  
        diapositivas[indice - 1].classList.add("activo");
 
        setTimeout(Diapositivas.automaticas, 4000);
    }
}

Diapositivas.automaticas();