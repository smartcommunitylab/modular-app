import { Component, Prop, Element, Event } from '@stencil/core';
import leaflet from 'leaflet';

@Component({
  tag: 'wc-map',
  styleUrl: 'wc-map.css',
  shadow: true,
})
export class WcTabs {
   /** Oggeto JSON contenente i dettagli dei POI. */
  /*  [
        {
          "id": "string", --> ID POI
          "lat": "number", --> Latitidune
          "lon": "number", --> Longitudine
          "name": "string", --> Nome POI
          "distance": "string", --> Distanza da posizione attuale
          "address": "string" --> Indirizzo
        }
      ]
  */
  /** Latitudine posizione attuale */
  @Prop() myLat: number;
  /** Longitudine posizione attuale */
  @Prop() myLon: number;
  /** Array di punti da inserire nella mappa */
  @Prop() points: string;
  /** Icona marker per "posizione attuale" */
  @Prop() mainMarkerIcon: string = "marker-icon.png";
  /** Icona marker POI */
  @Prop() poiMarkerIcon: string = "marker-icon.png";

   
  @Event({
    eventName: "poiSelected", 
    composed: true, 
    bubbles: true
  }) poiSelected: EventEmitter;

  @Element() element: HTMLElement;
  private mapElement: HTMLElement;
  private pointsObj: [{id:string, lat: number, lon: number,name:string, distance:string, address:string}];

  poiSelectedHandler(id: string) {
    this.poiSelected.emit(id);
    console.log("Cliccato", id);
  }

  componentWillLoad(){
    this.pointsObj = JSON.parse(this.points);
  }

  componentDidLoad(){
    this.mapElement = this.element.shadowRoot.getElementById('map');
    var map = leaflet.map(this.mapElement,{zoomControl:false}).setView([this.myLat,this.myLon], 13);

    var mainIcon = leaflet.icon({
      iconUrl: this.mainMarkerIcon,
      shadowUrl: null,
      iconSize:     [40, 40], 
      shadowSize:   [50, 64], 
      iconAnchor:   [22, 94], 
      shadowAnchor: [4, 62],  
      popupAnchor:  [-3, -76]
    });
    var poiIcon = leaflet.icon({
      iconUrl: this.poiMarkerIcon,
      shadowUrl: null,
      iconSize:     [40, 40], 
      shadowSize:   [0, 0], 
      iconAnchor:   [22, 94], 
      shadowAnchor: [0, 0],  
      popupAnchor:  [-3, -76]
    });

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    leaflet.marker([this.myLat,this.myLon],{icon: mainIcon}).addTo(map);
    leaflet.control.zoom({position:'bottomleft'}).addTo(map);

    if(this.points){
      this.pointsObj.forEach(element => {
        leaflet.marker([element.lat,element.lon],{ icon: poiIcon }).addTo(map)
        .bindPopup(
          "Nome: "+
          "<br/>Distanza: "+
          "<br/><button id='popupOpened'>CIAONE</button>"
        );
      });
     
    }
  }

  render() {
    return ([
      <link href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css" rel="stylesheet"/>,
      <div class="map-container">
        <div id="map"></div>
      </div>
    ])
  }

}
