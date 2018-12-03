import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  
  private urlApi: string = `${environment.apiUrl}/albums`;
  
  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.urlApi, {})
  }

  // activar en caso de emergencia
  /*public getById(id): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.urlApi}/${id}`)
  }

  public add(data: Album): Observable<Album> {
      return this.httpClient.post<Album>(this.urlApi, data);
  }

  public update(id: number, post: Album): Observable<Album> {
      return this.httpClient.put<Album>(`${this.urlApi}/${id}`, post)
  }

  public delete(postId: number): Observable<any> {
      return this.httpClient.delete<any>(`${this.urlApi}/${postId}`);
  }
*/

}
