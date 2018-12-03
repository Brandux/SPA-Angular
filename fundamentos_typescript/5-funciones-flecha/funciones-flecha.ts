// setInterval(function(){
//     console.log("ahora ");
    
// }, 50);

// setInterval(() => {
//     console.log("new")
// }, 1000);



const fruta: string[]= [
    'Naraja','Manzana','Banana'
];


fruta.forEach(function(fruta){
    console.log("fruta js viejo", fruta)
});


// moderno 

fruta.forEach( fruta => {
    console.log("moderno js:" , fruta);
});