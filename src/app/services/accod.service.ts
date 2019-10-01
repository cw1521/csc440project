import { Injectable } from '@angular/core';
import { Accod } from '../shared/Accod'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccodService {

  constructor(private http: HttpClient) { }

  getAccods(): Observable<Accod[]>{
    return this.http.get<Accod[]>("api/ods");
  }
}
