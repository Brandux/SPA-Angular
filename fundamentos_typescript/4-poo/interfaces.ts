interface CocheBase{
    listar ();
    guardar();
    editar(id : number);
    eliminar(id: number);
}

class Coche implements CocheBase {
    public listar () : Array<String>{
        return [''];
    }
    public guardar(): number {
        return 0;
    }
    public editar(id : number)  {}
    public eliminar() {}
}