function eli() {
    var ele = event.target;
    var ps = ele.getElementsByTagName("p");
    for(var i=0; i<ps.length; i++){
        ele.removeChild(ps[i]);
        ele.removeEventListener("click",mod);
    }
}

function mod() {
    var ele = event.target;
    var parra = document.createElement("p");
    var texto = document.createTextNode("He sido insertado");
    parra.appendChild(texto);
    ele.appendChild(parra);
    ele.removeEventListener("click",mod);
    ele.addEventListener("click",eli,false);
}

function load() {
    var ele = document.getElementById("añadir");
    ele.addEventListener("click",mod,false);
}

window.onload = load;