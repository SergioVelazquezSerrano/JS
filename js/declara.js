var var1 = 2;

const CONST = "Soy Constante y no redefinible";

for( let let1 = var1; let1 > 0 ; let1--){
    var1++;
    alert("Variable local de for = " + let1);
    alert("Variable global en for = " + var1);
    alert("Constante en for :" + CONST);
}

alert("Fuera del bucle donde creamos como variable local let1 esta no existira y dara pete, var1 al ser global podra seguir siendo utilizada y CONST sera siempre la misma y no podra ser modificada");
