import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private menu: any = [{
    title: {
      "it": "Home",
      "en": "Home",
      "de": "Home"
    },
    url: "/home",
    icon: "home"
  },
  {
    title: {
      "it": "Discover",
      "en": "Discover",
      "de": "Discover"
    },
    url: "/home",
    icon: "home"

  },
  {
    title: {
      "it": "Setting",
      "en": "Setting",
      "de": "Setting"
    },
    url: "/setting",
    icon: "home"

  }]


  getMenuItems(): any {
    //TODO
    if (this.menu)
      return this.menu
    //get all menu items starting with "menu-" and concat
    var results = [];
    for (var i = 0; i < window.localStorage.length; i++) {
      var key = window.localStorage.key(i);
      if (key.slice(0, 12) === "comune-menu-") {
        Array.prototype.push.apply(results, JSON.parse(window.localStorage.getItem(key)));
      }
    }
    this.menu = results;
    return results;
  }

  constructor() { }
}
