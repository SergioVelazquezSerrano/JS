function mostrarEventKey() {
    alert(event.type);
    alert("Has pretado " + event.code);
}

function load() {
    alert("Window load");
    document.onkeypress=mostrarEventKey;
}
window.onload = load;