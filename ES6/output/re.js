"use strict";

var monstrar = function monstrar() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

monstrar("Ser", 31, "gmail", "ZGZ");

var mostrar = function mostrar() {
  for (var _len2 = arguments.length, datos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datos[_key2] = arguments[_key2];
  }

  console.log(datos);
};

var arreglo = ["Eve", 27, "Ale"];
mostrar.apply(void 0, arreglo);
var arr = ["Paco", 14, "gmail", "BCN"];
mostrar.apply(void 0, arr);