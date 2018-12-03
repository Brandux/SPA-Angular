
const frutas: string[]= [
    'Naraja','Manzana','Banana'
];


/// For viejo
for (let n =0; n< frutas.length ; n ++){
    console.log(frutas[n]);
}

// for new

for(let fruta of frutas ){
    console.log("con typescript", fruta);
}