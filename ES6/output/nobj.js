"use strict";

var crearObj = function crearObj(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    info: function info() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

console.log(crearObj("Ser", 31).info());