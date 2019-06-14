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
  loadData(): any {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    this.http.get('assets/strade/data/spazzamento.json').toPromise().then(response => {
      this.data = response;
    });
  }
  getData(): any {
    return this.data;
  }
}
