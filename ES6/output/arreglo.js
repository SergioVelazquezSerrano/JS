"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var per = ["Ser", 31, "ZGZ", "Dev"];
var per2 = [];
var per3 = ["Sergio", 14, "ZGZ"];
var nombre = per[0],
    edad = per[1],
    pais = per[2],
    prof = per[3];
var _per2$ = per2[0],
    no2 = _per2$ === void 0 ? "Eve" : _per2$,
    _per2$2 = per2[1],
    ed2 = _per2$2 === void 0 ? 27 : _per2$2,
    _per2$3 = per2[2],
    pa2 = _per2$3 === void 0 ? "Ale" : _per2$3,
    _per2$4 = per2[3],
    pro2 = _per2$4 === void 0 ? "Fisio" : _per2$4;
var no3 = per3[0],
    pa3 = per3[2],
    _per3$ = per3[3],
    pro3 = _per3$ === void 0 ? "Paro" : _per3$;
console.log("".concat(nombre, " tiene ").concat(edad, " a\xF1os vive en ").concat(pais, " y trabaja de ").concat(prof));
console.log("".concat(no2, " tiene ").concat(ed2, " a\xF1os vive en ").concat(pa2, " y trabaja de ").concat(pro2));
console.log("".concat(no3, " tiene  a\xF1os vive en ").concat(pa3, " y trabaja de ").concat(pro3));

var info = function info(algo) {
  return console.log(algo);
};

info(per);
info(nombre);

var info2 = function info2(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      nombre = _ref2[0],
      pais = _ref2[2];

  return console.log(nombre, pais);
};

info2(per);

var info3 = function info3() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref4 = _slicedToArray(_ref3, 3),
      nombre = _ref4[0],
      pais = _ref4[2];

  return console.log(nombre, pais);
};

info3(per);

var info4 = function info4(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 4),
      nombre = _ref6[0],
      edad = _ref6[1],
      pais = _ref6[2],
      _ref6$ = _ref6[3],
      prof = _ref6$ === void 0 ? "NO esp" : _ref6$;

  return console.log(nombre, prof);
};

info4(per3);