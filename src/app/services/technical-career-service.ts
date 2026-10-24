import { Injectable } from '@angular/core';
import { TechnicalCareer } from '../auth/model/technical-career.model';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TechnicalCareerService {
  host = environment.BASE_URL_KMAN;
  port = environment.PORT_KMAN;
  path: string = 'kalum-management/v1'

  constructor(private httpClient: HttpClient) {

  }


  getTechnicalCareers(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}:${this.port}/${this.path}/technical-careers`);
  }

}
