import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlApi: string = `${environment.apiUrl}/users`;
  
  constructor(private httpClient: HttpClient) {   }
  
  public getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlApi, {})
  }
}
