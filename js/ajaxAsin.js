function moz() {
    var req = new XMLHttpRequest();
    req.open("GET","https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest",true);
    req.onreadystatechange = function(){
        if((req.readyState==4) && (req.status==200)){
            alert(req.responseText);
        }else{
            alert("Peticion erronea" + "\n" + "State = " + req.readyState + "\nStatus = " + req.status);
        }
    }
    req.send();

    
}

function load() {
    var ele = document.getElementById("mozilla");
    ele.addEventListener("click",moz,false);
}

window.onload = load;