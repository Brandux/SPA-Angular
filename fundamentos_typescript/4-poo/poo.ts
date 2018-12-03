class Coche{
    private color : string ;
    private modelo : string;
    private velocidad : number;

    // con el signo de  ? quiere decir que puede llegar dicha variable y en ocaciones no.
    constructor(colorDefault ?:string){    
        this.color= colorDefault;
    }

    public getColor(){
        return this.color;
    }
    public setColor(color:string){
        this.color = color;
    }
    
    
    public getVelocidad(){
        return this.velocidad;
    }
    public setVelocidad(velocidad){
        this.velocidad = velocidad;
    }
}


var coche = new Coche('blanco');
 var coche_dos = new Coche();
var coche_tres = new Coche('rojo');


console.log ('Este primer carro es de color: ', coche.getColor() );
// console.log ('Este segundo carro es de color: ', coche_dos.getColor());
console.log ('Este tercer carro es de color: ', coche_tres.getColor());