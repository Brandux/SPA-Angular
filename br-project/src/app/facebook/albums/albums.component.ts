import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vit-albums',
  template: `
    <!-- Formulario -->
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-success" routerLink="./new" >Nuevo</button>
      </div>
    </div>
    <br>
    <!-- Tabla -->
    <div class="row">
      <div class="col-md-12">
      <vit-list-album></vit-list-album>
      </div>
    </div>
  `,
  styles: []
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
