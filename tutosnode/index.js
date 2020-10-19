const http = require('http');
const url = require('url');

const server= http.createServer((req, res) =>{
    const path = req.url;

    if(path==='/nosotros'||path==='/'){
        res.end("Nosotros");
    }else if(path==='/productos'){
        res.end("Productos");
    }else{
        res.writeHead(404);
        res.end("Pagina no disp");
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Servi escuchando en puerto 8000');
});