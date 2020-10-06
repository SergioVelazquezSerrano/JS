const usuario = {
    nombre:"Ser",
    correo:"correo",
    edad: 31,
    pais:"ZGZ",
    prof: "Devops"
}

const {nombre,correo,dire="No se sabe"}=usuario;
console.log(`La direccion es ${dire}`);

const info =({ nombre,prof, dire="Andorra"})=>console.log(`El nombre es ${nombre} y trabaja de ${prof} en ${dire}`)

info(usuario);