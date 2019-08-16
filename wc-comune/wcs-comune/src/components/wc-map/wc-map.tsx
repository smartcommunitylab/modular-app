import { Component, Prop, Element, Event } from '@stencil/core';
import leaflet from 'leaflet';

@Component({
  tag: 'wc-map',
  styleUrl: 'wc-map.css',
  shadow: true,
})

export class WcTabs {
  /** Oggeto JSON contenente i dettagli dei POI. ULTIMO ELEMENTO = Posizione attuale*/
  /*  [
        {
          "id": "string", --> ID POI
          "lat": "number", --> Latitidune
          "lon": "number", --> Longitudine
          "name": "string", --> Nome POI
          "distance": "string", --> Distanza da posizione attuale
          "address": "string", --> Indirizzo
          "id": "<string>" --> ID POI
        }
      ]
  */
  /** Array di punti da inserire nella mappa */
  @Prop() points: string;
  @Prop() mypos: string;
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
  private pointsObj: [{ lat: number, lon: number, name: string, distance: string, img: string, address: string, id: string }];
  private myPosObj: { lat: number, lon: number } = { lat: 0, lon: 0 };

  componentWillLoad() {
    if (this.points)
    {
      console.log(this.points)
      this.pointsObj = JSON.parse(this.points);
    }
    
    if (this.mypos)
    {
      console.log(this.mypos)
       this.myPosObj = JSON.parse(this.mypos);
    }
    // this.myPoints.long = this.pointsObj[this.pointsObj.length - 1].lon;
  }

  componentDidLoad() {
    /* CREAZIONE MAPPA */
    this.mapElement = this.element.shadowRoot.getElementById('map');
    var map = leaflet.map(this.mapElement, {
      zoomControl: false}).setView([this.myPosObj['lat'], this.myPosObj['long']], 13);

    leaflet.NumberedDivIcon = leaflet.Icon.extend({
      options: {
        // EDIT THIS TO POINT TO THE FILE AT http://www.charliecroom.com/marker_hole.png (or your own marker)
        iconUrl: this.poiMarkerIcon,
        number: '',
        shadowUrl: null,
        iconSize: new leaflet.Point(25, 41),
        iconAnchor: new leaflet.Point(13, 41),
        popupAnchor: new leaflet.Point(0, -33),
        /*
        iconAnchor: (Point)
        popupAnchor: (Point)
        */
        className: 'leaflet-div-icon'
      },

      createIcon: function () {
        var div = document.createElement('div');
        var img = this._createImg(this.options['iconUrl']);
        var numdiv = document.createElement('div');
        numdiv.setAttribute("class", "number");
        numdiv.innerHTML = this.options['number'] || '';
        div.appendChild(img);
        div.appendChild(numdiv);
        this._setIconStyles(div, 'icon');
        return div;
      },

      //you could change this to add a shadow like in the normal marker if you really wanted
      createShadow: function () {
        return null;
      }
    });

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    leaflet.control.zoom({ position: 'bottomleft' }).addTo(map);

    if (this.pointsObj) {
      this.pointsObj.forEach((element, i) => {
        //add char because selector must start with it
        var customPopup = "<div id='a"+element.id+"'><div  class=\"index-poi\">"+(i+1)+"</div><div  class=\"element-name\">"+element.name + "</div><br/> <div class=\"detail-bar\"></div><img src=" + element.img + " width='350px'/></div>";
        // specify popup options 
        var customOptions =
        {
          'maxWidth': '500',
          'className': 'custom'
        }
        var m=leaflet.marker([element.lat, element.lon], { icon: new leaflet.NumberedDivIcon({ number: (i+1) }) })
        m.id=element.id;
        m.bindPopup(customPopup, customOptions).addTo(map)
          .on('popupopen', (popup)=> {
            //generate event choosing the right popup (id without a added earlier)
            console.log("popup opened !", popup);
            var popupDDOM=this.mapElement.querySelector('#a'+element.id);
            popupDDOM.addEventListener('click',()=>{
              this.poiSelected.emit(element.id.substring(0, element.id.length));
            });
          });
        // }
      });
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
