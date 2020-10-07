class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    info(){
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}

export default Persona;