const crearObj =(nombre,edad)=>{
    return{
        nombre,
        edad,
        info(){
            return `${nombre} tiene ${edad} años`;
        }
    }
}

console.log(crearObj("Ser",31).info());