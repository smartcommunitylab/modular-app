import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class DatiServiceService {

  constructor(private http: HttpClient) { }

  getDati(parametri: any):Promise<any> {
    let promise = new Promise((resolve, reject) => {

    let vetDati = [];
    let url = environment.trentorientaBaseDataAPI+environment.eventiAPI;
    this.http.post(url,parametri)
    .toPromise()
    .then( (res:any) => { // Success
      let parser = new DOMParser();
      for (let item of res.content) {
        // item.description = parser.parseFromString(item.description, 'text/html').body.textContent.replace(/&quot;/g,'"'); //rende il contenuto del testo interpreteabile da HTML
        item.shortAbstract = item.shortAbstract.replace(/&quot;/g,'"');
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
