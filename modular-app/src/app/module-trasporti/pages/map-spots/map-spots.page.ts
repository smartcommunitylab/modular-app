import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ProfileService } from '../../services/profile.service';
import { ConfigService } from '../../services/config.service';
import { DbService } from '../../services/db.service';
import { TransportService } from '../../services/transport.service';
import leaflet from 'leaflet';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-map-spots',
  templateUrl: './map-spots.page.html',
  styleUrls: ['./map-spots.page.scss'],
})
export class MapSpotsPage implements OnInit {
  accesibilityKnow: any;
  markers: string;
  //include wc with spots of type selected
  constructor(private loadingController: LoadingController, private transportService: TransportService, private dbService: DbService, private configService: ConfigService, private profileService: ProfileService) { }
  allMarkers = null;
  mapData = null;
  elements = null;
  markerIcon = null;
  icon = null;
  title = null;
  ref = null;
  flagAccessibility = null;
  accessibilityStyle = null;
  popupStop = null;
  currBounds = null;
  tooManyMarkers = false;
  center = window["app-module"]["geolocation"];
  //for viaggia trento
  //var MAX_MARKERS = 20;
  MAX_MARKERS = 100;

  async ngOnInit() {
    if (!this.accesibilityKnow) {
      this.flagAccessibility = false;
    }
    this.flagAccessibility = this.profileService.getAccessibility();
    setTimeout(() => {
      this.center = window["app-module"]["geolocation"];
    }, 1000);
    this.MAX_MARKERS = this.configService.getMaxMarkers();
    this.filterMarkers(this.flagAccessibility, this.currBounds);
    this.elements = this.transportService.getElements();
    window.addEventListener('mapInitiated', bounds => {
      console.log(bounds);
      this.filterMarkers(this.flagAccessibility,bounds);
    });
    window.addEventListener('mapMoved', bounds => {
      console.log(bounds);
      this.filterMarkers(this.flagAccessibility,bounds);
    });
    // this.$on('leafletDirectiveMap.ttMap.moveend', function (event) {
    //   this.filterMarkers();
    // });

    // this.$on('$ionicView.beforeEnter', function () {
    //   this.mapService.refresh('ttMap');
    // });
    // this.$on('leafletDirectiveMarker.ttMap.click', function (e, args) {
    //   var showPopup = function () {
    //     $ionicPopup.show({
    //       templateUrl: 'templates/stopPopup.html',
    //       title: $filter('translate')('lbl_stop'),
    //       cssClass: 'parking-popup',
    //       scope: $scope,
    //       buttons: [
    //         {
    //           text: $filter('translate')('btn_close'),
    //           type: 'button-close'
    //         },
    //         {
    //           text: '<i class="icon ion-navigate"></i>',
    //           onTap: this.navigate,
    //         },
    //         {
    //           text: '<i class="icon ion-android-time"></i>',
    //           onTap: this.showStopData
    //         }
    //       ]
    //     });
    //     this.mapData = ttService.getTTMapData();
    //     this.elements = this.mapData.elements;
    //     this.markerIcon = this.mapData.markerIcon;
    //     this.icon = this.mapData.icon;
    //     this.title = this.mapData.title;
    //     this.ref = this.mapData.ref;
    //     this.flagAccessibility = this.profileService.getAccessibility();
    //     this.accessibilityStyle = this.getAccessibilityStyle(this.ref);
    //   };

    //   var p = this.markers[args.modelName].stop;
    //   this.popupStop = p;
    //   const loading = await this.loadingController.create();
    //   ttService.getNextTrips(this.popupStop.agencyId, this.popupStop.id, 5).then(function (data) {
    //     loading.dismiss();
    //     //          var routes = [];
    //     this.elements.forEach(function (e) {
    //       var list = [];
    //       if (e.group) {
    //         if (e.group.routes) list = list.concat(e.group.routes);
    //         else if (e.group.route) list.push(e.group.route);
    //       } else {
    //         if (e.routes) list = list.concat(e.routes);
    //         else if (e.route) list.push(e.route);
    //       }
    //       list.forEach(function (r) {
    //         if (data[r.routeId] != null) {
    //           data[r.routeId].routeElement = e;
    //           data[r.routeId].routeObject = r;
    //           //                routes.push(data[r.routeId]);
    //         } else if (data[r.routeSymId] != null) {
    //           data[r.routeSymId].routeElement = e;
    //           data[r.routeSymId].routeObject = r;
    //           //                routes.push(data[r.routeSymId]);
    //         }
    //       });
    //     });
    //     this.popupStop.data = data;
    //     this.popupStop.icon = this.icon;
    //     //          this.popupStop.routes = routes;
    //     this.popupStop.visualization = Config.getStopVisualization(this.popupStop.agencyId);
    //     showPopup();
    //   }, function (err) {
    //     Config.loaded();
    //     showPopup();
    //     console.log('No data');
    //   });
    // });
  }

  getAccessibilityStyle(ref) {

    //check if bus or train
    if (ref === 'urbano') {
      this.accesibilityKnow = true;
    } else {
      this.accesibilityKnow = false;
    }
    return this.flagAccessibility ? 'ic_access' : 'ic_access_outline';

  }

  toggleAccessibility() {

    this.flagAccessibility = !this.flagAccessibility;
    this.accessibilityStyle = this.getAccessibilityStyle(this.ref);
    // this.filterMarkers(true);
    this.profileService.setAccessibility(this.flagAccessibility);
  }

  getAgencies() {
    var res = [];
    this.elements.forEach(function (e) {
      if (e.agencyId && res.indexOf(e.agencyId) < 0) res.push(e.agencyId);
    });
    return res;
  };

  async filterMarkers(accessibility, currBounds) {
    const loading = await this.loadingController.create();
    loading.present();
    // mapService.getMap('ttMap').then(function (map) {
    // var currBounds = map.getBounds();
    if (this.allMarkers == null || accessibility) {
      var agencyIds = this.getAgencies();
      var markers = this.dbService.getStopsData(agencyIds);
      // var markers = [];
      // for (var i = 0; i < list.length; i++) {
      // if (list[i].wheelChairBoarding == 1 || !this.flagAccessibility) {
      //   var iconUrl = 'img/' + this.markerIcon + '.png';
      // } else {
      //   var iconUrl = 'img/ic_urbanBus_no_acc.png';
      // }
      // markers.push({
      //   stop: list[i],
      //   lat: parseFloat(list[i].coordinates[0]),
      //   lng: parseFloat(list[i].coordinates[1]),
      //   icon: {
      //     iconUrl: iconUrl,
      //     iconSize: [36, 50],
      //     iconAnchor: [18, 50],
      //     popupAnchor: [-0, -50]
      //   },
      // });
      // }
      this.allMarkers = markers;
    }

    var filteredMarkers = [];

    if (this.allMarkers.length > this.MAX_MARKERS) {
      this.allMarkers.forEach(function (m) {
        if (!currBounds) {
          filteredMarkers.push(m);
        }
        if (currBounds && currBounds.contains(leaflet.latLng(m.lat, m.lng))) {
          filteredMarkers.push(m);
        }
      });
      loading.dismiss()
      if (filteredMarkers.length > this.MAX_MARKERS) {
        console.log('too many markers');
        if (!this.tooManyMarkers) {
          console.log('too many');
          // Toast.show($filter('translate')('err_too_many_markers'), "short", "bottom");
          this.tooManyMarkers = true;
        }
        this.markers = this.convertForWC(filteredMarkers);
        return;
      } else if (filteredMarkers.length < this.MAX_MARKERS) {
        this.tooManyMarkers = false;
      }
    } else {
      loading.dismiss()
      this.tooManyMarkers = false;
    }
    this.markers = this.convertForWC(filteredMarkers);
  }
  convertForWC(filteredMarkers: any[]): string {
    var returnArray = [];
    filteredMarkers.forEach(elem => {
      returnArray.push({
        "id": elem.id,
        "lat": elem.latitude,
        "long": elem.longitude,
        "object": JSON.stringify(elem)
      })
    })
    return  JSON.stringify(returnArray);
  }
};

  // initMap() {
  //   mapService.initMap('ttMap').then(function () {
  //     GeoLocate.locate().then(function (pos) {
  //       this.center = {
  //         lat: pos[0],
  //         lng: pos[1],
  //         zoom: 18
  //       };
  //     }, function () {
  //       this.filterMarkers(false);
  //     });

  //   });
  // };


  // showStopData() {
  //   ttService.setTTStopData(this.popupStop);
  //   $state.go('app.ttstop', {
  //     stopId: this.popupStop.id,
  //     agencyId: this.popupStop.agencyId,
  //     ref: mapData.ref
  //   });
  // }

  // navigate() {
  //   planService.setPlanConfigure({
  //     to: {
  //       name: this.popupStop.name,
  //       lat: this.popupStop.coordinates[0],
  //       long: this.popupStop.coordinates[1]
  //     },
  //   });
  //   planService.setName('to', this.popupStop.name);
  //   $state.go('app.plan');
  // };



  // isEmpty(data) {
  //   return angular.equals(data, {});
  // };


  // angular.extend($scope, {
  //   center: {
  //     lat: Config.getMapPosition().lat,
  //     lng: Config.getMapPosition().long,
  //     zoom: 18
  //   },
  //   markers: [],
  //   events: {}
  // });

