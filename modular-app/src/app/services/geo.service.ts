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
  constructor(private geolocation: Geolocation, private config: ConfigService) {

  }
  Init(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.watchLocation();
      resolve();
    });
  }

  // Start location update watch
  watchLocation() {
    let geo;
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      geo = {
        'lat': this.geoLatitude,
        'long': this.geoLongitude
      };
      console.log(geo);
      if (!window[this.config.getAppModuleName()]) {
        window[this.config.getAppModuleName()] = {};
      }
      window[this.config.getAppModuleName()]['geolocation'] = geo;


    });
  }

  // Stop location update watch
  stopLocationWatch() {
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }
  private degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  getDistanceKM(first: {lat: number, lon: number}, second: {lat: number, lon: number}) {
    const earthRadiusKm = 6371;

    const dLat = this.degreesToRadians(second.lat - first.lat);
    const dLon = this.degreesToRadians(second.lon - first.lon);

    first.lat = this.degreesToRadians(first.lat);
    second.lat = this.degreesToRadians(second.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(first.lat) * Math.cos(second.lat);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round((earthRadiusKm * c) * 100) / 100;
  }
}
