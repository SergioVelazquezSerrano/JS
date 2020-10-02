function mod() {
    alert("Has Clickado");
    var ele = event.target;
    ele.innerHTML="SORPRESIIII";
    ele.removeEventListener("click",mod);
}

function load() {
    var ele = document.getElementById("evento");
    ele.addEventListener("click",mod,false);
}

window.onload = load;