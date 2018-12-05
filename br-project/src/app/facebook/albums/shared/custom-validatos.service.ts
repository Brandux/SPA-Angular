import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatosService {

  constructor() { }

  public notEmpty(control: AbstractControl){
    let err = null;

    const regexp = /^$|\s+/ ;

    if( control.value !== undefined && regexp.test(control.value)){
      
      err = {
        'notempty': {
          valid: false
        }
      }
    }


    return err;
  }

  public onlyNamber (control: AbstractControl){
    let err = null;

    const regexp = /^[0-9]*$/ ;

    if( control.value !== undefined && !regexp.test(control.value) && isNaN(control.value)){
      
      err = {
        'onlyNamber': {
          valid: false
        }
      }
    }


    return err;
  }

  
  public onlyNamberPositivo (control: AbstractControl){
    let err = null;

    const regexp = /^[0-9]*$/ ;

    if( control.value !== undefined && !regexp.test(control.value) && (isNaN(control.value) || control.value <= 0)){
      
      err = {
        'onlynamberpositive': {
          valid: false
        }
      }
    }


    return err;
  }

}
