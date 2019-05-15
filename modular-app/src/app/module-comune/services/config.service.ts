import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  menu = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    }
  ]
  constructor() {

  }
  init() {
    localStorage.setItem('comune-menu-', JSON.stringify(this.menu));

  }
}
