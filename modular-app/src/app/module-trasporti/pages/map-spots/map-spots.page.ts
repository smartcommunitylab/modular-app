import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { ProfileService } from '../../services/profile.service';
import { ConfigService } from '../../services/config.service';
import { DbService } from '../../services/db.service';
import { TransportService } from '../../services/transport.service';
import leaflet from 'leaflet';
import { JsonPipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { StopDetailComponent } from './stop-detail/stop-detail.component';

@Component({
  selector: 'app-map-spots',
  templateUrl: './map-spots.page.html',
  styleUrls: ['./map-spots.page.scss'],
})
export class MapSpotsPage implements OnInit {
  accesibilityKnow: any;
  markers: string ='[{"id":"point2","lat":"46.07559","long":"11.16411"}]';
  //include wc with spots of type selected
  constructor(private loadingController: LoadingController,public modalController: ModalController, private translate: TranslateService, private toast: ToastController, private transportService: TransportService, private dbService: DbService, private configService: ConfigService, private profileService: ProfileService) { }
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
  // center = JSON.stringify(window["app-module"]["geolocation"]);
  center = '{"latitude":"46.067727","longitude":"11.151561"}'
  //tmp
  MAX_MARKERS = 30;

  async ngOnInit() {
    if (!this.accesibilityKnow) {
      this.flagAccessibility = false;
    }
    this.flagAccessibility = this.profileService.getAccessibility();

    this.MAX_MARKERS = this.configService.getMaxMarkers();
    this.elements = this.transportService.getElements();
    window.addEventListener('mapInitiated', bounds => {
      console.log(bounds);
      this.filterMarkers(this.flagAccessibility, (<any>bounds).detail);
    });
    window.addEventListener('mapMoved', bounds => {
      console.log(bounds);
      this.filterMarkers(this.flagAccessibility, (<any>bounds).detail);
    });
    window.addEventListener('poiSelected', stop => {
      console.log(stop);
      this.showStopDetail((<any>stop).detail);
    });

  }
  async showStopDetail(stopId: any) {
    //show popup with detail information
      const modal = await this.modalController.create({
        component: StopDetailComponent,
        componentProps: {
          'id': stopId.id,
          'object': stopId.object
        }
      });
      return await modal.present();
    
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
    const wcTrasportiMAp: any = document.querySelector('wc-trasporti-map');

    this.currBounds = currBounds;
    // loading.present();
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
        // if (!currBounds) {
        //   filteredMarkers.push(m);
        // }
        if (currBounds && currBounds.contains(leaflet.latLng(m.latitude, m.longitude))) {
          filteredMarkers.push(m);
        }
      });
      // loading.dismiss()
      if (filteredMarkers.length > this.MAX_MARKERS) {
        console.log('too many markers');
        if (!this.tooManyMarkers) {
          console.log('too many');
          this.translate.get('err_too_many_markers').subscribe(async value => {
            const toast = await this.toast.create({
              message: value,
              duration: 2000
            });
            toast.present();
            // this.toast.create($filter('translate')('err_too_many_markers'), "short", "bottom");
            this.tooManyMarkers = true;
          })
        }
        // this.markers = this.convertForWC(filteredMarkers);
        wcTrasportiMAp.showPoints();

        return;
      } else if (filteredMarkers.length < this.MAX_MARKERS) {
        this.tooManyMarkers = false;
      }
    } else {
      // loading.dismiss()
      this.tooManyMarkers = false;
    }
    this.markers = this.convertForWC(filteredMarkers);
    wcTrasportiMAp.showPoints();

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
    return JSON.stringify(returnArray);
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

