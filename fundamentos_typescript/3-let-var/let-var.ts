// let es una variable que limita su alcance al bloque donde se utilice.
// var documentos : string ;
// let papeles : string;
// const urlApi : string = '';

// var es mas glonla

var a = 7;
var b = 12;

if(a==7){
    let a = 4;

    var b =1;
    console.log('Dentro del if: ', a,b);
}


console.log('Fuera del if: ', a,b);

// Nunca va ser cambiable
const url:string='';