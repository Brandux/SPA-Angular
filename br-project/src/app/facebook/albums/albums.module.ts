import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { ListAlbumComponent, FornAlbumComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsService } from './shared/albums.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidatosService } from './shared/custom-validatos.service';

@NgModule({
  declarations: [AlbumsComponent, FornAlbumComponent, ListAlbumComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    AlbumsService,
    CustomValidatosService
  ],
})
export class AlbumsModule { }
