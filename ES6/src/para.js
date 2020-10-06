function regUsur(nom = "Ser", pais = "ZGZ", corre, tlfno="999999999"){
    return `Nombre: ${nom} , Pais: ${pais}, Correo: ${corre}, Telefono: ${tlfno}`;
}

console.log(regUsur());
console.log(regUsur("Eve",undefined,"Corre","666666666"));