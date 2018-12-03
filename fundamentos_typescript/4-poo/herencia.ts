// Herencia con TypeScript 

class Programa {

    private nombre: string;
    private version : number;

    public setNombre (nombre : string) : void{
        this.nombre = nombre;
    }

    public getNombre() : string{
        return this.nombre;
    }

    public setVersion (version : number) : void{
        this.version = version;
    }

    public getVersion(): number{
        return this.version;
    }
}


class EditarVideo extends Programa{

    private timeline : number;

    public setTimeline (timeline : number) : void{
        this.timeline = timeline;
    }

    public gettimeline(): number{
        return this.timeline;
    }

    public getAllData() : string{
        return ('Nombre : ' + this.getNombre() + ', version : ' + this.getVersion() + ', Timeline : ' + this.gettimeline());
    }

}


let programas = new EditarVideo();
programas.setNombre('adobePremier');
programas.setVersion(4);
programas.setTimeline(235);

console.log(programas.getAllData());
