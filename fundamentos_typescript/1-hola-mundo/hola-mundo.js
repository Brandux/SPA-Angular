function saludador(nombre) {
    return "hola " + nombre;
}
nombre = "bra";
var container = document.getElementById('container');
container.innerHTML = saludador(nombre);
