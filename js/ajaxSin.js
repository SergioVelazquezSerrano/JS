function moz() {
    var req = new XMLHttpRequest();
    req.open("GET","https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest",false);
    req.send();

    if(req.status==200){
        alert(req.responseText);
    }else{
        alert("Peticion erronea");
    }
}

function load() {
    var ele = document.getElementById("mozilla");
    ele.addEventListener("click",moz,false);
}

window.onload = load;