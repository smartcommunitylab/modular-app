import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  urlMappa = "https://www.google.com/maps/search/?api=1&query=";
  constructor() { }
  openAddressMap(address) {
    window.open(encodeURI(this.urlMappa + address), '_system');
  }
}
