const nombres = ["Ser","Pablo","Juan","David"];
const apes =["Vel","Alegre","Palomo","Propet"]
const num_car = nombres.map(function(nombre){
    console.log(`${nombre} tiene ${nombre.length} letras`);
});

const num_flech = apes.map((ape) => {
    console.log(`${ape} tiene ${ape.length} letras`);
    return `${ape} tiene ${ape.length} letras`;
});
console.log(num_flech);

const num_car2 = nombres.map(nombre=>`${nombre} tiene ${nombre.length} letras`);
console.log(num_car2);