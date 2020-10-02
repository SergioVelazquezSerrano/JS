var frutas = ["Manzana","Pera","Naranja"];


for (var i =0; i < frutas.length ; i++){
    alert("Comida numero " + i + " es " + frutas[i]);
}

alert ("Numero de frutas = "+  frutas.length);

frutas.push("Piña");

alert("Longitud actual del array = " + frutas.length);

alert("La posicion del elemento Manzana es: " + frutas.indexOf("Manzana"));