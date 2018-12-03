import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { FornAlbumComponent } from './components';

const routes: Routes = [
  {
    path: 'new',
    component: FornAlbumComponent,
  },
  {
    path: '',
    component : AlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
