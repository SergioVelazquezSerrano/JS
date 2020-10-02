var dep = {
    nombre:"Devs",
    nEmple:14,
    imprimeNombre:function () {
        var texto ="El nombre del departamento es: " + this.nombre;
        alert(texto);
        return texto;
    }
}

var oficina = Object.create(dep);
var emple = Object.create(oficina);
var compi = Object.create(emple);
var nombreDep = emple.imprimeNombre();
alert(nombreDep);

emple.imprimirCompi=function () {
    var texto ="El numero de compis es: " + this.nEmple;
    alert(texto);
    return texto;    
}

emple.imprimirCompi();
compi.imprimirCompi();

//oficina no hereda por tanto esto no tiene sentido
//oficina.imprimirCompi();


