const http = require('http');
const fs = require('fs');
const url = require('url');

const server= http.createServer((req, res) =>{
    const path = req.url;

    if(path==='/nosotros'||path==='/'){
        const vista = fs.readFile(`${__dirname}/vi.html`,"utf8",(err,data)=>{
            if(err){
                res.end("Error de fichero");
            
            }else{
                res.end(data);
            }
        });
    };
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Servi escuchando en puerto 8000');
});