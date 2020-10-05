function load() {

var cad = prompt("Introduzca su cadena");

    if(cad.length>0){
        for(var i = 0; i<cad.length ; i++){
            letra = cad.charAt(i);
            var ele = document.getElementById("res");
            var parra = document.createElement("p");
            var texto = document.createTextNode(letra);
            parra.appendChild(texto);
            ele.appendChild(parra);

        }
    }else{
        alert("No se introdujo nada");
    }    
}

window.onload = load;