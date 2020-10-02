function load() {
    var divs = document.getElementsByTagName("div");
    alert("Hay " + divs.length + " divs en esta pagina");
    for (var i=0; i<divs.length; i++){
        var status = divs[i].getAttribute("id");
        alert("Div con id = "+ status);
    }

    var div1 = document.getElementById("1");
    alert(div1);
    alert("Nuestro objeto con id=1 contiene: " + div1.innerHTML);
}
        
window.onload = load;