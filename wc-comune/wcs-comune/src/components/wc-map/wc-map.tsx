import { Component, Prop, Element, Event } from '@stencil/core';
import leaflet from 'leaflet';
import { EventEmitter } from '@ionic/core/dist/types/stencil.core';
// import polyline from 'polyline-encoded';

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
  @Prop() tracciato:string;
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
    if (this.points) {
      console.log(this.points)
      this.pointsObj = JSON.parse(this.points);
    }

    if (this.mypos) {
      console.log(this.mypos)
      this.myPosObj = JSON.parse(this.mypos);
    }
    // this.myPoints.long = this.pointsObj[this.pointsObj.length - 1].lon;
  }

  componentDidLoad() {
    /* CREAZIONE MAPPA */
    this.mapElement = this.element.shadowRoot.getElementById('map');
    var map = leaflet.map(this.mapElement, {
      zoomControl: false,
      tap: false
    }).setView([this.myPosObj['lat'], this.myPosObj['long']], 13);

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
      var arrayMarker = [];
      this.pointsObj.forEach((element, i) => {
        //add char because selector must start with it
        var customPopup = "<div id='a" + element.id + "'><div  class=\"index-poi\">" + (i + 1) + "</div><div  class=\"element-name\">" + element.name + "</div><br/> <div class=\"detail-bar\"></div><img src=" + element.img + " width='350px'/></div>";
        // specify popup options 
        var customOptions =
        {
          'maxWidth': '500',
          'className': 'custom'
        }
        var m = leaflet.marker([element.lat, element.lon], { icon: new leaflet.NumberedDivIcon({ number: (i + 1) }) })
        m.id = element.id;
        m.bindPopup(customPopup, customOptions).addTo(map)
          .on('popupopen', (popup) => {
            //generate event choosing the right popup (id without a added earlier)
            console.log("popup opened !", popup);
            var popupDDOM = this.mapElement.querySelector('#a' + element.id);
            popupDDOM.addEventListener('click', () => {
              this.poiSelected.emit(element.id.substring(0, element.id.length));
            });
          });
        // }
        arrayMarker.push(m);
      });
      var group = new leaflet.featureGroup(arrayMarker);
      var a = group;
      a=null;
      group =a;
      map.on('dragend', function() {
        map.invalidateSize();
      })
    }
    var coords = this.decode(this.tracciato, 5);
    var polyline =leaflet.polyline(coords, {
      color: '#11B3EF',
      weight: 4,
      opacity: 1,
      smoothFactor: 1
    });
    polyline.addTo(map);
//     var pointA = new leaflet.LatLng(46.073526, 11.161608);
// var pointB = new leaflet.LatLng(46.076362, 11.172101);
// var pointList = [pointA, pointB];

// var firstpolyline = new leaflet.Polyline(pointList, {
//     color: 'red',
//     weight: 3,
//     opacity: 0.5,
//     smoothFactor: 1
// });
// firstpolyline.addTo(map);
    // map.fitBounds(polyline.getBounds());
    // var polylinePoints = [
    //   [46.073526, 11.161608],
    //   [46.076362, 11.172101]
    // ];            
    
    //  leaflet.polyline(polylinePoints).addTo(map)

    setTimeout(() => {
      // map.invalidateSize();
      // if (arrayMarker.length > 0)
      //   map.fitBounds(group.getBounds());
    }, 500);
  }
  decode(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, Number.isInteger(precision) ? precision : 5);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        shift = result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lat / factor, lng / factor]);
    }

    return coordinates;
};
  render() {

    return ([
      <link href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css" rel="stylesheet" />,
      <div class="map-container">
        <div id="map"></div>
      </div>
    ]);
  }
}