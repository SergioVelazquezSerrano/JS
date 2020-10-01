var hora = 17;

    if( ( hora >= 6 ) && (hora < 14 ) ){
        alert( "Buenas Días" );
    }else if( ( hora >= 14 ) && ( hora < 21 ) ){
        alert( "Buenas Tardes" );
    }else{
        alert( "Buenas Noches" );
    }

var diaSemana = 100;

    switch (diaSemana) {
        case 1:
            alert("Lunes");
            break;

        case 2:
        alert("Martes");
        break;

        case 3:
            alert("Miercoles");
            break;

        case 4:
            alert("Jueves");
            break;

        case 5:
            alert("Viernes");
            break;

        case 6:
            alert("Sabado");
            break;
        
        case 7:
            alert("Día del Señor");
            break;
        
        default:
            alert("Error");
            break;
    }