"use strict";

function regUsur() {
  var nom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Ser";
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ZGZ";
  var corre = arguments.length > 2 ? arguments[2] : undefined;
  var tlfno = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "999999999";
  return "Nombre: ".concat(nom, " , Pais: ").concat(pais, ", Correo: ").concat(corre, ", Telefono: ").concat(tlfno);
}

console.log(regUsur());
console.log(regUsur("Eve", undefined, "Corre", "666666666"));