import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class DatiServiceService {

  constructor(private http: Http) { }

  getDati(parametri: any):Promise<any> {
    let promise = new Promise((resolve, reject) => {

    let vetDati = [];
    let url = 'https://tn.smartcommunitylab.it/trentorienta/api/events';
    this.http.post(url,parametri)
    .toPromise()
    .then( res => { // Success
      let parser = new DOMParser();
      for (let item of JSON.parse(res['_body']).content) {
        item.description = parser.parseFromString(item.description, 'text/html').body.textContent; //rende il contenuto del testo interpreteabile da HTML
        vetDati.push(item);
      }
      resolve(vetDati);
      },
      msg => { // Error
      reject(msg);
      }
    );
    // let strData = this.http.post(url,parametri );

    // strData.subscribe(data => {
    //   let parser = new DOMParser();
    //   for (let item of JSON.parse(data['_body']).content) {
    //     item.description = parser.parseFromString(item.description, 'text/html').body.textContent; //rende il contenuto del testo interpreteabile da HTML
    //     vetDati.push(item);
    //   }
    // }, error => {
    //   console.error(error);
    // });
    // return vetDati;
  }) 
  return promise;
  }
}
