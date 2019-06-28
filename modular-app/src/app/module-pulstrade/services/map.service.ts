// tslint:disable: no-bitwise
// tslint:disable: no-construct
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GeoService } from 'src/app/services/geo.service';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  private data: any;

  constructor(private http: HttpClient, private geoSrv: GeoService) {
  }

  Init(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.loadData();
      resolve();
    });
  }
  /**
   * Download streets data from API
   * @return an `Array` of streets
   */
  loadData(): any {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    this.http.get('https://tn.smartcommunitylab.it/streetcleaning/rest/street').toPromise().then(response => {
      this.data = this.buildFinalData(response);
    });
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
