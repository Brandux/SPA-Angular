var frutas = [
    'Naraja', 'Manzana', 'Banana'
];
/// For viejo
for (var n = 0; n < frutas.length; n++) {
    console.log(frutas[n]);
}
// for new
for (var _i = 0, frutas_1 = frutas; _i < frutas_1.length; _i++) {
    var fruta = frutas_1[_i];
    console.log("con typescript", fruta);
}
