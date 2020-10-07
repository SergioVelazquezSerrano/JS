const texto = "Holiiii";

console.log(texto, " ¿empieza con A? ", texto.toUpperCase().startsWith("A"));
console.log(texto, " ¿empieza con I? ", texto.toUpperCase().endsWith(""));
console.log(texto, " ¿incluye la palabra ser? ",texto.includes("ser"));

const amigos = ["Ciri","Pablo","Chris"];

console.log("Ciri es tu amigo? ",amigos.includes("Ciri"));

console.log(amigos.find(amigo=>amigo.length >4));

console.log(amigos.findIndex(amigo=>amigo==="Ciri"));
