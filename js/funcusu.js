function calcularIVA(iva) {
    var precio = prompt("Precio del producto");
    if(isNaN(precio)){
        alert("No has introducido un numero");
        return false;
    }else{
        var precioIVA = parseFloat(precio)*(1+iva/100);
        alert("El precio con IVA es " + precioIVA);
        return true;
    }
}
var iva = prompt("IVA a aplicar");
calcularIVA(iva);