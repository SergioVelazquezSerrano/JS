const fs= require('fs');

const documento = fs.readFile('documento.txt','utf8', (err,data)=>{
    if(err){
        console.log("Ha ocurrido un error");
    }else{
        console.log(data);
    }
});

console.log("Lectura Asincrona");




