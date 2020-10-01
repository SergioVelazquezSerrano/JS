
var radio = prompt("Introduzca el radio de su circulo ");

var area = 2 * Math.PI * radio;
alert("El area de ese circulo es: " + area);

var min = prompt("Introduzca su minimo valor");
var max = prompt("Introduzca su valor maximo");
var alea = Math.random()*(max-min)+min;
alert("Su aleatorio comprendido entre " + min + " y " + max + " es " + Math.trunc(alea));