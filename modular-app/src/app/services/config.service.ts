import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appModuleName="app-module";
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
      "it": "Highlilghts",
      "en": "Highlilghts",
      "de": "Highlilghts"
    },
    url: "/home",
    icon: "home"

  },
  {
    title: {
      "it": "Restaurants & Hotel",
      "en": "Restaurants & Hotel",
      "de": "Restaurants & Hotel"
    },
    url: "/home",
    icon: "home"

  },
  {
    title: {
      "it": "Events",
      "en": "Events",
      "de": "Events"
    },
    url: "/home",
    icon: "home"

  },
  {
    title: {
      "it": "Touristic Itineraties",
      "en": "Touristic Itineraties",
      "de": "Touristic Itineraties"
    },
    url: "/home",
    icon: "home"

  },
  {
    title: {
      "it": "Useful Information",
      "en": "Useful Information",
      "de": "Useful Information"
    },
    url: "/home",
    icon: "home"

  },
  {
    title: {
      "it": "Favorites",
      "en": "Favorites",
      "de": "Favorites"
    },
    url: "/home",
    icon: "star"

  },
  
  {
    title: {
      "it": "Setting",
      "en": "Setting",
      "de": "Setting"
    },
    url: "/setting",
    icon: "home"

  },{
    title: {
      "it": "Credits",
      "en": "Credits",
      "de": "Credits"
    },
    url: "/home",
    icon: "home"

  }]

getAppModuleName():string {
  return this.appModuleName;
}
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
