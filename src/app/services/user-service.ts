import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  host = environment.BASE_URL_AUTH;
  port = environment.PORT;
  path:string = 'kalum-auth/v1';
  
  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}:${this.port}/${this.path}/user`); 
  }



}
