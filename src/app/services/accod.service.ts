import { Injectable } from '@angular/core';
import { Accod } from '../shared/Accod'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccodService {

  constructor(private http: HttpClient) { }

  getAccods(): Promise<Accod[]>{
    this.http.get<Accod[]>("api/ods").toPromise().then(
      res => {
        return res;
      });
    return ;
  }
}
