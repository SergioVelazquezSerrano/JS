function Manzana(tipo, color) {
    this.tipo = tipo;
    this.color = color;
}

var golden = new Manzana("Golden","Roja");
alert("El objeto Manzana es del tipo " + golden.tipo + " de color " + golden.color);


var Sandia={
    tipo:"De Agua",
    color:"Roja"
};
alert("El objeto Sandia es del tipo " + Sandia.tipo + " de color " + Sandia.color);

Sandia.tipo="Sin Pepitas";
alert("El objeto Sandia (modificado) es del tipo " + Sandia.tipo + " de color " + Sandia.color);
