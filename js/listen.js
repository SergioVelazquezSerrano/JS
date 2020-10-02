function mod() {
    alert("Has Clickado");
    document.removeEventListener("click", mod);
}

function load() {
    document.addEventListener("click",mod,false);
}

window.onload = load;