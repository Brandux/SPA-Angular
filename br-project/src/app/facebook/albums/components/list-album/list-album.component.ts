import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/albums';
import { AlbumsService } from '../../shared/albums.service';

@Component({
  selector: 'vit-list-album',
  templateUrl: './list-album.component.html',
  styles: []
})
export class ListAlbumComponent implements OnInit {

  public albums: Album[];

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.loadAlbum()
  }
  private loadAlbum() {
    this.albumService.getAll()
        .subscribe(albums => {
            this.albums = albums;
        });
}

}
