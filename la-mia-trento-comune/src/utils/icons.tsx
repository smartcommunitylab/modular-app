import { h } from '@stencil/core';

export class Icons {
  public iconList = {
    home: this.homeIcon,
    help: this.helpIcon,
    map: this.mapIcon,
    info: this.infoIcon,
    place: this.placeIcon,
    email: this.emailIcon,
    phone: this.phoneIcon,
    address: this.addrIcon,
    distance: this.distIcon,
    url: this.urlIcon,
    date: this.dateIcon,
    time: this.timeIcon,
    price: this.priceIcon,
    cat: this.catIcon,
    share: this.shareIcon,
    default: this.defaultIcon,
  };

  private homeIcon(_color: string) {
    return <ion-icon name="home"></ion-icon>;
  }
  private helpIcon(_color: string) {
    return <ion-icon name="help-circle"></ion-icon>;
  }
  private mapIcon(_color: string) {
    return <ion-icon name="map"></ion-icon>;
  }
  private infoIcon(_color: string) {
    return <ion-icon name="information-circle"></ion-icon>;
  }
  private placeIcon(_color: string) {
    return <ion-icon name="flag"></ion-icon>;
  }
  private defaultIcon(_color: string) {
    return <ion-icon name="folder"></ion-icon>;
  }
  private emailIcon(_color: string) {
    return <ion-icon name="mail"></ion-icon>;
  }
  private phoneIcon(_color: string) {
    return <ion-icon name="call"></ion-icon>;
  }
  private addrIcon(_color: string) {
    return <ion-icon name="navigate"></ion-icon>;
  }
  private distIcon(_color: string) {
    return <ion-icon name="resize"></ion-icon>;
  }
  private urlIcon(_color: string) {
    return <ion-icon name="globe"></ion-icon>;
  }
  private dateIcon(_color: string) {
    return <ion-icon name="calendar"></ion-icon>;
  }
  private timeIcon(_color: string) {
    return <ion-icon name="time"></ion-icon>;
  }
  private priceIcon(_color: string) {
    return <ion-icon name="wallet"></ion-icon>;
  }
  private catIcon(_color: string) {
    return <ion-icon name="caret-forward"></ion-icon>;
  }
  private shareIcon(_color: string) {
    return <ion-icon name="share-social"></ion-icon>;
  }
}
