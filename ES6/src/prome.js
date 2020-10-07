const prome = new Promise((resolve,reject) => {
    setTimeout(()=>{
        const exito = true;
        if(exito){
            resolve("Exito");
        }else{
            reject("No exitoso");
        }
    },4000);
});

prome.then((mensaje)=>{
    alert(mensaje);
});

prome.catch((mensaje)=>{
    alert(mensaje);
});