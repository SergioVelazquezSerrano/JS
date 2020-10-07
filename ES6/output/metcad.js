"use strict";

var texto = "Holiiii";
console.log(texto, " ¿empieza con A? ", texto.toUpperCase().startsWith("A"));
console.log(texto, " ¿empieza con I? ", texto.toUpperCase().endsWith(""));
console.log(texto, " ¿incluye la palabra ser? ", texto.includes("ser"));
var amigos = ["Ciri", "Pablo", "Chris"];
console.log("Ciri es tu amigo? ", amigos.includes("Ciri"));
console.log(amigos.find(function (amigo) {
  return amigo.length > 4;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === "Ciri";
}));