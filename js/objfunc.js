function Manzana(tipo, color) {
    this.tipo = tipo;
    this.color = color;
    this.numero = 0;
    this.cambioNumero = function (num) {
        if(isNaN(num)){
            alert("Error");
        }else{
            this.numero = num;
        }
    }
}

var golden = new Manzana("Golden","Roja");
alert("El objeto Manzana es del tipo " + golden.tipo + " de color " + golden.color + " tiene " + golden.numero + " manzanas");

golden.tipo = "GoldenPlus";
alert("El objeto Manzana (modificado) es del tipo " + golden["tipo"] + " de color " + golden["color"]);

golden.cambioNumero(10);
alert("Hemos modificado un atributo por funcion a Manzana " + golden.tipo + " tiene " + golden.numero + " manzanas");


var Sandia={
    tipo:"De Agua",
    color:"Roja",
    numero: 0,
    cambioNumero:function (num) {
        if(isNaN(num)){
            alert("Error");
        }else{
            this.numero = num;
        }
    }
};
alert("El objeto Sandia es del tipo " + Sandia.tipo + " de color " + Sandia.color);

Sandia.tipo="Sin Pepitas";
alert("El objeto Sandia (modificado) es del tipo " + Sandia.tipo + " de color " + Sandia.color);

Sandia.cambioNumero(4);
alert("Hemos modificado un atributo por funcion a Sandia " + Sandia.tipo + " tiene " + Sandia.numero + " sandias");
