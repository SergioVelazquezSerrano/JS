const per = ["Ser", 31, "ZGZ", "Dev"];
const per2 =[];
const per3 =["Sergio", 14, "ZGZ"];


const [nombre,edad,pais,prof] = per;
const [no2 ="Eve", ed2=27, pa2="Ale", pro2="Fisio"]=per2;
const [no3, , pa3, pro3="Paro"]=per3;


console.log(`${nombre} tiene ${edad} años vive en ${pais} y trabaja de ${prof}`);
console.log(`${no2} tiene ${ed2} años vive en ${pa2} y trabaja de ${pro2}`);
console.log(`${no3} tiene  años vive en ${pa3} y trabaja de ${pro3}`);

const info = (algo)=>console.log(algo);


info(per);
info(nombre);

const info2=([nombre,,pais])=>console.log(nombre,pais);

info2(per);

const info3=([nombre,,pais]=persona)=>console.log(nombre,pais);

info3(per);

const info4=([nombre,edad,pais,prof="NO esp"])=>console.log(nombre,prof);
info4(per3);
