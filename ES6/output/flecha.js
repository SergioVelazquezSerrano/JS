"use strict";

var nombres = ["Ser", "Pablo", "Juan", "David"];
var apes = ["Vel", "Alegre", "Palomo", "Propet"];
var num_car = nombres.map(function (nombre) {
  console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
});
var num_flech = apes.map(function (ape) {
  console.log("".concat(ape, " tiene ").concat(ape.length, " letras"));
  return "".concat(ape, " tiene ").concat(ape.length, " letras");
});
console.log(num_flech);
var num_car2 = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(num_car2);