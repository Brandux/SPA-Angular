import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class authGuardService implements CanActivate{

    constructor() { }

    canActivate(): boolean{
        /* en este contenedor se esquecifican las maneras  en que un usuario podra acceder a las rutas de angular*/
        /* Validar que el usuario tiene un token */
        console.log("this is guard");
        if(/*localStorage.getItem('token')*/ true){
            return true;
        }else{
            console.log('false');
            return false;
        }
        
    }
}