import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'vit-form-users',
  templateUrl: './form-users.component.html',
  styles: [`
  input.ng-invalid{
    border-right: 5px solid red;
  }`],
})
export class FormUsersComponent implements OnInit {

  public usersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildUsersForm();
    this.usersForm.controls['Nombre'].errors.required;
  }

  
  private buildUsersForm(){
    const controls = this.initializeControls();
    this.usersForm = this.formBuilder.group(controls);
    //this.albumForm = new FormGroup(controls);
  }

  private initializeControls(){
    return {
      userId : ['0', [Validators.required ]],
      Nombre: ['', [Validators.required ] ],
      Usuario: ['', [Validators.required ] ],
      Email: ['', [Validators.required ] ],
      phone: ['', [Validators.required ] ],
      website: ['', [Validators.required ] ],
      company: ['', [Validators.required ] ]
    }
  }

  public onSave(){
    console.log(this.usersForm.value);
  }
}
