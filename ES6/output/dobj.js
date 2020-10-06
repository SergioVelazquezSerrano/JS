"use strict";

var usuario = {
  nombre: "Ser",
  correo: "correo",
  edad: 31,
  pais: "ZGZ",
  prof: "Devops"
};
var nombre = usuario.nombre,
    correo = usuario.correo,
    _usuario$dire = usuario.dire,
    dire = _usuario$dire === void 0 ? "No se sabe" : _usuario$dire;
console.log("La direccion es ".concat(dire));

var info = function info(_ref) {
  var nombre = _ref.nombre,
      prof = _ref.prof,
      _ref$dire = _ref.dire,
      dire = _ref$dire === void 0 ? "Andorra" : _ref$dire;
  return console.log("El nombre es ".concat(nombre, " y trabaja de ").concat(prof, " en ").concat(dire));
};

info(usuario);