import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  SERVER_URL = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) {}

  public getUsers() {
    return this.httpClient.get(this.SERVER_URL + 'users');
  }
}
