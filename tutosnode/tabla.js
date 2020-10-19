const http = require('http');
const fs = require('fs');
const url = require('url');

const sustituirTarea = require('./modulos/sustituir');


const tareaTemplate= fs.readFileSync(`${__dirname}/templates/tarea.html`,"utf8");

const data= fs.readFileSync(`${__dirname}/data/data.json`,"utf8");
const dataTable=JSON.parse(data);

const server= http.createServer((req, res) =>{

    const {query,pathname}=url.parse(req.url,true);


    if(pathname==='/nosotros'||pathname==='/'){
        const tareaLista=dataTable.map(tarea=>sustituirTarea(tarea,tareaTemplate)).join('');
        const vista = fs.readFile(`${__dirname}/templates/tabla.html`,"utf8",(err,data)=>{
            if(err){
                res.end("Error de fichero");
            
            }else{
                dataView=data.replace("{%listatareas%}",tareaLista);
                res.end(dataView);
            }
        });
    }else if(pathname==="/tarea"){
        const vista= fs.readFile(`${__dirname}/templates/detalleTarea.html`,"utf8",(err,data)=>{
            if(err){
                res.end("Error");
            }else{
                dataView=sustituirTarea(dataTable[query.id-1],data);
                res.end(dataView);
            }
        })
    };
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Servi escuchando en puerto 8000');
});