module.exports = (tarea,tareaTemplate)=>{
    let output = tareaTemplate.replace(/{%id%}/g,tarea.id);
    output = output.replace("{%nombre%}",tarea.nombre);
    output = output.replace("{%descripcion%}",tarea.descripcion);
    output = output.replace("{%fecha%}",tarea.fecha);
    
    return output;
}
