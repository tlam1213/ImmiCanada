import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Service from '../models/service';

@Injectable()
export default class ServiceService {
  public API = 'http://localhost:8888';
  public SERVICE_API = `${this.API}/api/Services`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Service>> {
    return this.http.get<Array<Service>>(this.SERVICE_API);
  }

  get(id: string) {
    return this.http.get(`${this.SERVICE_API}/${id}`);
  }

}