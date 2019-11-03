import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class AccodService {

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) { }


  private async request(method: string, url: string, data?: any) {
    const token = await this.oktaAuth.getAccessToken();

    //console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }


  getAccods() {
    return this.request('get', '/api/ods');
  }

  getAccodsByUrl(url: string) {
    return this.request('get', url);
  }

  // getAccodsByAge(age: String) {
  //   this.request('get', `/api/ods/age/${age}`)
  // } 

  // getAccodsByLocation(location: String) {
  //   this.request('get', `/api/ods/location/${location}`)
  // } 

  // getAccodsBySex(sex: String) {
  //   this.request('get', `/api/ods/sex/${sex}`)
  // } 
  
  // getAccodsByRace(race: String) {
  //   this.request('get', `/api/ods/race/${race}`)
  // } 


}
