import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL: String = 'http://localhost:3000'


@Injectable({
  providedIn: 'root'
})
export class SelectBusService {

  constructor(private readonly http: HttpClient) {
  }
  getBus(): Observable<any> {
    return this.http.get<any>(`${API_URL}/buses`);
  }

}
