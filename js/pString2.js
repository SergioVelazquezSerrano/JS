function load() {

    var cad = prompt("Introduzca su cadena");
    var a = 0;
    var e = 0;
    var i = 0;
    var o = 0;
    var u = 0;

    if(cad.length>0){
        for(var j = 0; j<cad.length ; j++){
            letra = cad.charAt(j);
            switch (letra) {
                case "a":
                    a++;
                    break;
                case "e":
                    e++;
                    break;
                case "i":
                    i++;
                    break;
                case "o":
                    o++;
                    break;
                case "u":
                    u++;
                    break;
    
                default:
                    break;
            }
    
        }
    }else{
        alert("No se introdujo nada");
    }
    
    var ele = document.getElementById("res");
    var parra = document.createElement("p");
    var texto = document.createTextNode(
        "La letra A se repite " + a + " veces" + "\n"+
        "La letra E se repite " + e + " veces" + "\n"+
        "La letra I se repite " + i + " veces" + "\n"+
        "La letra O se repite " + o + " veces" + "\n"+
        "La letra U se repite " + u + " veces" + "\n"
        );
    parra.appendChild(texto);
    ele.appendChild(parra);
    

}
    
    window.onload = load;