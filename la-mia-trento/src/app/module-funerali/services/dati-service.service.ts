import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatiService {
  urlBase = 'https://tn.smartcommunitylab.it/trentorienta/api/funerali/';

  constructor(private http: HttpClient) { }

  getDati(data:string):Promise<any> {
    let parametri = {}
    return new Promise((resolve,reject)=> {
      return this.http.get(this.urlBase+"from?date="+data,parametri).toPromise().then(response => {
        // return this.http.get('./assets/funerali/data/localFunerali.json').toPromise().then(response => {
          if (response){
          resolve( response);
        }
        reject();
      },err =>{
        reject()
      })

    })



  }
}
