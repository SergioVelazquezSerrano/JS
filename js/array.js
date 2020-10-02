var frutas = ["Manzana","Pera","Naranja"];
var comida = new Array("Arroz","Pasta","Pollo");

alert("La posicion 2 del array frutas es: " + frutas[2]);

for (var i =0; i < comida.length ; i++){
    alert("Comida numero " + i + " es " + comida[i]);
}

frutas[2]="Mandarina";
alert("Ahora la posicion 2 contiene " + frutas[2]);