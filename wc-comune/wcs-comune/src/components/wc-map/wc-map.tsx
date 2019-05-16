import { Component, Prop, Element } from '@stencil/core';
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
          "lat": "number", --> Latitidune
          "lon": "number", --> Longitudine
          "name": "string", --> Nome POI
          "distance": "string", --> Distanza da posizione attuale
          "address": "string", --> Indirizzo
          "id": "<string>" --> Indirizzo
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
  
  @Element() element: HTMLElement;
  private mapElement: HTMLElement;
  private pointsObj: [{lat: number, lon: number,name:string, distance:string, address:string, id:string}];
  
  componentWillLoad(){
    this.pointsObj = JSON.parse(this.points);
  }

  componentDidLoad(){
    /* CREAZIONE MAPPA */
    this.mapElement = this.element.shadowRoot.getElementById('map');
    var map = leaflet.map(this.mapElement).setView([this.myLat,this.myLon], 13);

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

    if(this.pointsObj){
      this.pointsObj.forEach(element => {
        leaflet.marker([element.lat,element.lon],{icon: poiIcon}).addTo(map)
        .on('click',function(){
          var modal = document.querySelector('wc-modal')
          modal.setAttribute('data',element.id);
          modal.setAttribute('text', element.address);
          modal.setAttribute('title', element.name);
          modal.setAttribute('btn-text', 'Dettagli');
          modal.setAttribute('shown','true');
        });
      });
      
    }
    /*********************************************************************************************************************** */
  }

  render() {
    return ([
      <link href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css" rel="stylesheet"/>,
      <div class="map-container">
        <div id="map"></div>
      </div>
    ]);
  }
}