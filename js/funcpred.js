function evaluar() {
    var operacion = prompt("introducir la expresion a evaluar");
    var res = eval(operacion);
    alert("El resultado es " + res);
}

function evaluarNum() {
    var valor = prompt("Introduce lo que quieras");
    if(isNaN(valor)){
        alert("No has introducido un numero");
    }else{
        alert("Has introducido un numero");
    }
}

function convertirNum() {
    var input = prompt("Introduzca un numero");
    var inputParse = parseInt(input);
    alert("El numero introducido " + input + " es " + inputParse);
}