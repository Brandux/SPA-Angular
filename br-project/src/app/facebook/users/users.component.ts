import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vit-users',
  template: `
  <!-- Formulario -->
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-success" routerLink="./new-users" >Nuevo</button>
        <br>  
      </div>
    </div>

    <!-- Tabla -->
    <div class="row">
      <div class="col-md-12">
      <vit-list-users></vit-list-users>
      </div>
    </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
