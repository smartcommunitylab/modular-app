import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';
import leaflet from 'leaflet';

@Component({
  tag: 'wc-trasporti-map',
  styleUrl: 'wc-trasporti-map.css',
  shadow: true,
})
export class WcTabs {
  /** Oggeto JSON contenente i dettagli dei POI. ULTIMO ELEMENTO = Posizione attuale*/
  /*  [
        {
          "id": "string", --> ID POI
          "lat": "number", --> Latitidune
          "lon": "number", --> Longitudine
        }
      ]
  */
  /** Array di punti da inserire nella mappa */
  @Prop() points: string;
  /** Icona marker per "posizione attuale" */
  @Prop() mainMarkerIcon: string = "./assets/mymarker.png";
  /** Icona marker POI */
  @Prop() poiMarkerIcon: string = "./assets/marker.png";


  @Event({
    eventName: "poiSelected",
    composed: true,
    bubbles: true
  }) poiSelected: EventEmitter;

  @Event() mapInitiated: EventEmitter;
  @Event() mapMoved: EventEmitter;

  @Element() element: HTMLElement;
  private mapElement: HTMLElement;
  private map: any;
  private pointsObj: [{ lat: number, long: number, name: string, distance: string, address: string, id: string }];
  private myPoints: any = null;

  componentWillLoad() {
    if (this.points) {
      this.pointsObj = JSON.parse(this.points);
      if (!this.myPoints)
        this.myPoints = {}
      this.myPoints.lat = this.pointsObj[this.pointsObj.length - 1].lat;
      this.myPoints.long = this.pointsObj[this.pointsObj.length - 1].long;
    }
  }

  componentDidLoad() {
    /* CREAZIONE MAPPA */
    this.mapElement = this.element.shadowRoot.getElementById('map');
    if (this.myPoints) {
      this.map = leaflet.map(this.mapElement).setView([this.myPoints['lat'], this.myPoints['long']], 13)
      this.map.on('movend', () => {
        console.log(this.map.getBounds());
        this.mapMoved.emit(this.map.getBounds())
      }
      )
      this.map.on('zoomend', () => {
        console.log(this.map.getBounds());

        this.mapMoved.emit(this.map.getBounds())
    });

    this.map.on('dragend', () => {
      console.log(this.map.getBounds());

      this.mapMoved.emit(this.map.getBounds())
    });
      var mainIcon = leaflet.icon({
        iconUrl: this.mainMarkerIcon,
        shadowUrl: null,
        iconSize: [40, 40],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      });
      var poiIcon = leaflet.icon({
        iconUrl: this.poiMarkerIcon,
        shadowUrl: null,
        iconSize: [40, 40],
        shadowSize: [0, 0],
        iconAnchor: [22, 94],
        shadowAnchor: [0, 0],
        popupAnchor: [-3, -76]
      });

      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      leaflet.marker([this.myPoints['lat'], this.myPoints['long']], { icon: mainIcon }).addTo(this.map);

      if (this.pointsObj) {
        this.pointsObj.forEach(element => {
          if (element.name !== 'myPos') {
            leaflet.marker([element.lat, element.long], { icon: poiIcon }).addTo(this.map)
              .on('click', () => {
                this.poiSelected.emit(element);
                console.log(element)
              });
          }
        });
        this.mapInitiated.emit(this.map.getBounds());
      }

    }
    /*********************************************************************************************************************** */
  }

  render() {
    return ([
      <link href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css" rel="stylesheet" />,
      <div class="map-container">
        <div id="map"></div>
      </div>
    ]);
  }
}