import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidatosService } from '../../shared/custom-validatos.service';
import { AlbumsService } from '../../shared/albums.service';

@Component({
  selector: 'vit-forn-album',
  templateUrl: './forn-album.component.html',
  styles: [`
    input.ng-invalid{
      border-right: 5px solid red;
    }`
  ]
})
export class FornAlbumComponent implements OnInit {

  public albumForm : FormGroup;

  // public userId = new FormControl('01');
  // public titulo = new FormControl('mis fotos', [Validators.required , Validators.maxLength(10)] ); 

  constructor(private formBuilder: FormBuilder , 
    private custom : CustomValidatosService,
    private albumsServices: AlbumsService) { }

  ngOnInit() {
    this.buildAlbumForm();
    this.albumForm.controls['titulo'].errors.required;//primera forma para validar formulario
    this.albumForm.get('titulo').errors.required; // segunda forma de hacerlo

    

  }

  private buildAlbumForm(){
    const controls = this.initializeControls();
    this.albumForm = this.formBuilder.group(controls);
    //this.albumForm = new FormGroup(controls);
  }

  private initializeControls(){
    return {
      userId : ['0', [Validators.required ]],
      titulo: [' ',  [Validators.required , Validators.maxLength(10), this.custom.notEmpty]],
      // Numero :[ '0' , 
      //   [
      //     Validators.required, 
      //     this.custom.onlyNamber,
      //     this.custom.notEmpty,
      //     this.custom.onlyNamberPositivo
      //   ]
      // ],
    }
  }

  public onSubmit(){
    const valor = this.albumForm.value;
    this.albumsServices.add$(valor).subscribe( Album => {
      console.log(Response);
    });
  }

  // private initializeControls(){
  //   return {
  //     userId : new FormControl('01'),
  //     titulo : new FormControl('mis fotos', [Validators.required , Validators.maxLength(10)] )
  //   }
  // }

}
