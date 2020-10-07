"use strict";

var prome = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve("Exito");
    } else {
      reject("No exitoso");
    }
  }, 4000);
});
prome.then(function (mensaje) {
  alert(mensaje);
});
prome["catch"](function (mensaje) {
  alert(mensaje);
});