var titulo = document.getElementsByTagName("H1").item(0);
titulo.firstChild.data="Documento dinamico";

var para = document.getElementsByTagName("p").item(0);
para.firstChild.data = "Nuevo parrafo";

var newText = document.createTextNode("Nuevo nodo de texto");
var newNode = document.createElement("p")
newNode.appendChild(newText);
para.parentNode.appendChild(newNode);