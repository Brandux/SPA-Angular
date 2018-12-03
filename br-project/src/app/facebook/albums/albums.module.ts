import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { ListAlbumComponent, FornAlbumComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsService } from './shared/albums.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlbumsComponent, FornAlbumComponent, ListAlbumComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    AlbumsService,
  ],
})
export class AlbumsModule { }
