const fs= require('fs');

const documento = fs.readFileSync('documento.txt','utf8');

console.log(documento);

const hi = "Hola Ser";

console.log(hi);

const data=documento+" de Ser";
fs.writeFileSync('documento.txt',data);

