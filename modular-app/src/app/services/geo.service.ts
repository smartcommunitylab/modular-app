import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: string;

  watchLocationUpdates: any;
  loading: any;
  isWatching: boolean;
  constructor(private geolocation: Geolocation,private config: ConfigService) {

  }
  Init(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.watchLocation();
      resolve();
    })
  }

  //Start location update watch
  watchLocation() {
    var geo;
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      geo = {
        "lat": this.geoLatitude,
        "long": this.geoLongitude
      }
      console.log(geo);
      if (!window[this.config.getAppModuleName()]) {
        window[this.config.getAppModuleName()] = {}
      }
      window[this.config.getAppModuleName()]["geolocation"] = geo;
      

    });
  }

  //Stop location update watch
  stopLocationWatch() {
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }

}
