import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdmissionExamenService {
  host = environment.BASE_URL_KMAN;
  port = environment.PORT_KMAN;
  path: string = 'kalum-management/v1';


  constructor(private httpClient : HttpClient) {

  }

  getAdmissionExam(): Observable<any> {
    return this.httpClient.get(`${this.host}:${this.port}/${this.path}/addmission-exam`);
  }
  
}
