// tslint:disable: no-bitwise
// tslint:disable: no-construct
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GeoService } from 'src/app/services/geo.service';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MapService {


  private data: any;
  private defaultCenter = {
    lat: 46.0748,
    long: 11.1217
  };

  constructor(private http: HttpClient, private geoSrv: GeoService, private platform: Platform) {
  }

  Init(): Promise<any> {
    return this.platform.ready().then(() => {
      return new Promise<void>((resolve, reject) => {
        this.loadData().then(()=> {
          resolve();
        },err => {
          reject();
        });
        
      });
    })
  }
  getDefaultCenter(): any {
    return [this.defaultCenter.lat, this.defaultCenter.long];
  }
  /**
   * Download streets data from API
   * @return an `Array` of streets
   */
  loadData(): Promise<any> {
    var deferred =  new Promise((resolve,reject)=>{
      if (this.data) {
        return resolve(this.data);
      }
       this.http.get(environment.streetcleaningBaseDataAPI).toPromise().then(response => {
      //  this.http.get('./assets/strade/data/spazzamento.json').toPromise().then(response => {
          this.data = this.buildFinalData(response);
          resolve(this.data)
      }, err => {
        reject();
      });
    })
    return deferred;
  }
  /**
   * @return Streets array
   */
  getData(): any {
    return this.data;
  }
  /**
   * Change the `polylines` property inside the streets array, making it usable by leaflet library
   * @param arr Streets array
   */
  buildFinalData(arr) {
    arr.forEach(e => {
      e.polylines = this.parsePolylines(e);
    });
    return arr;
  }
  /**
   * Convert the `byte` coordinates to an `Array<number>` for leaflet polyline build
   * @param street Street object
   */
  protected parsePolylines(street) {
    let byte = null;
    let shift = 0;
    let result = 0;
    let lat = 0;
    let lon = 0;
    let lat_change, lon_change;
    const coord = [];
    let i = 0;
    const factor = Math.pow(10, 5);

    const str = new String(street.polylines);

    while (i < str.length) {
      byte = null;
      shift = 0;
      result = 0;
      do {
        byte = str.charCodeAt(i++) - 63;

        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      lat_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
      shift = result = 0;
      do {
        byte = str.charCodeAt(i++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      lon_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

      lat += lat_change;
      lon += lon_change;

      // Soluzione molto approssimativa, controllare i dati e la conversione
      if (lat / factor < 50 && lon / factor < 50) {
        coord.push([lat / factor, lon / factor]);
      }
    }

    return coord;
  }
}
