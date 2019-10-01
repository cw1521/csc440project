import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccodService {

  constructor(private http: HttpClient) { }

  getAccods() {
    return this.http.get("https://database-editor.herokuapp.com/api/ods");
  }
}
