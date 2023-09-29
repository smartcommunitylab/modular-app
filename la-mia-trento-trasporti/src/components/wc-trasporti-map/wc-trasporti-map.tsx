import { Component, Prop, Element, Event, EventEmitter, Method,h } from '@stencil/core';
import leaflet from 'leaflet';

@Component({
  tag: 'wc-trasporti-map',
  styleUrl: 'wc-trasporti-map.css',
  shadow: true,
})
export class WcTrasportiMap {
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
  //centro della mappa 
  @Prop() center: string;
  @Prop() zoomlevel: number;
  @Prop() userpoisition: string;
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

  //contenitori dei div
  @Element() element: HTMLElement;
  @Method()
  async showPoints() {
    this.internalShowPoints();
}
  private mapElement: HTMLElement;
  //elemento leaflet ella mappa
  private map: any;
  //i punti realmente aggiunti 
  private pointsObj: [{ lat: number, long: number, name: string, distance: string, address: string, id: string }];
  private centerPoint: any = null;

internalShowPoints() {

  this.pointsObj = JSON.parse(this.points);
  console.log("showpoints");

  var poiIcon = leaflet.icon({
    iconUrl: this.poiMarkerIcon,
    shadowUrl: null,
    iconSize: [40, 40],
    shadowSize: [0, 0],
    iconAnchor: [22, 94],
    shadowAnchor: [0, 0],
    popupAnchor: [-3, -76]
  });
  // leaflet.map(this.mapElement).setView([this.centerPoint.lat, this.centerPoint.long], 13)
  console.log("this.mapElement"+this.mapElement)
  if (this.centerPoint) {    
    console.log("starting adding point");
    if (this.pointsObj) {
      this.pointsObj.forEach(element => {
        console.log(element)

        if (element.name !== 'myPos') {
          leaflet.marker([element.lat, element.long], { icon: poiIcon }).addTo(this.map)
            .on('click', () => {
              this.poiSelected.emit(element);
              console.log(element)

            });
        }
      });
      // this.map.invalidateSize();
    }

  }
  /*********************************************************************************************************************** */
}

  setCenter(): any {


  }
  componentWillLoad() {
    this.centerPoint = {}

    if (this.center) {
      var center: any = JSON.parse(this.center)
      this.centerPoint.lat = center.latitude;
      this.centerPoint.long = center.longitude

      if (this.points) {
        this.pointsObj = JSON.parse(this.points);
      }
    }
    else {
      this.centerPoint.lat = 0;
      this.centerPoint.long = 0;
    }
  }

  componentDidLoad() {
    var mainIcon = leaflet.icon({
      iconUrl: this.mainMarkerIcon,
      shadowUrl: null,
      iconSize: [40, 40],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    // this.showPoints();
    this.mapElement = this.element.shadowRoot.getElementById('map');
    if (!this.map) {
      console.log("this.map"+this.map)
      this.map = leaflet.map(this.mapElement, {tap:false}).setView([this.centerPoint['lat'], this.centerPoint['long']],15)
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


      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      leaflet.marker([this.centerPoint['lat'], this.centerPoint['long']], { icon: mainIcon }).addTo(this.map);
    }
    this.mapInitiated.emit(this.map.getBounds());

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