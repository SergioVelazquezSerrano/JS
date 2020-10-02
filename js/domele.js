function load() {
    var divs = document.getElementsByTagName("div");
    alert("Hay " + divs.length + " divs en esta pagina");

    var div1 = document.getElementById("1");
    var ps = div1.getElementsByTagName("p");
    alert(ps);
    alert("Nuestro objeto con id=1 tiene : " + ps.length + " parrafos y contiene: " + ps[0].innerHTML);
}
        
window.onload = load;