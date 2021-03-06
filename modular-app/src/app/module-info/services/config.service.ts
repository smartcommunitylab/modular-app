import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appModuleName: string = "app-module";
  private defaultPosition = {
    lat: 0,
    long: 0
  }
  private menu = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    }
  ]
  constructor() {

  }
  init() {
    localStorage.setItem('info-menu-', JSON.stringify(this.menu));

  }

  getAppModuleName(): string {
    return this.appModuleName;
  }
  getDefaultPosition() {
    return this.defaultPosition;
  }
}
