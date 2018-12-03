import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

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
      titulo: ['', 
        [Validators.required , Validators.maxLength(10)] ],
    }
  }

  public onSubmit(){
    console.log(this.albumForm.value);
  }

  // private initializeControls(){
  //   return {
  //     userId : new FormControl('01'),
  //     titulo : new FormControl('mis fotos', [Validators.required , Validators.maxLength(10)] )
  //   }
  // }

}
