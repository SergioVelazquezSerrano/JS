class Usuario{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        return "Hola";
    }
    info(){
        return `<br>Nombre: ${this.nombre} tiene ${this.edad} años`;
    }
}

class Estudiante extends Usuario{
    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado = grado;
    }
    info(){
        return `<br>Nombre: ${this.nombre} tiene ${this.edad} años y estudia ${this.grado}`;
    }
}

const ser = new Usuario("Ser",31);
document.write(ser.nombre);

document.write("<br>");

const eve = new Usuario("Eve",27);
document.write(eve.nombre);

document.write("<br>");

document.write(ser.saludar());

document.write(ser.info());

const est = new Estudiante("Paco",14,"DAW");
document.write(est.info());