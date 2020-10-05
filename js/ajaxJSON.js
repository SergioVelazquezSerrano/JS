function mos(datos){
    for( var i=0; i<datos.length; i++){
        var ele = document.getElementById("not");
        var parra = document.createElement("p");
        var texto = document.createTextNode(i + " " +datos[i]["data"]["title"]);
        parra.appendChild(texto);
        ele.appendChild(parra);
        }
}

function moz() {
    var req = new XMLHttpRequest();
    req.open("GET","https://www.reddit.com/r/Pokemongo_DC/.json",true);
    req.onreadystatechange = function(){
        if((req.readyState==4) && (req.status==200)){
            var resp = JSON.parse(req.responseText);
            var datos = resp["data"]["children"];
            mos(datos);
        }else{
        }
    }
    req.send();
}

function load() {
    var ele = document.getElementById("mozilla");
    ele.addEventListener("click",moz,false);
}

window.onload = load;