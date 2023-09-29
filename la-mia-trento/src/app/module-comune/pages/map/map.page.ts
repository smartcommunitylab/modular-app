import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})
export class MapPage implements OnInit {

  mapPoints: string;
  language: string;

  constructor(private route: ActivatedRoute, private config: ConfigService, private translate: TranslateService) { 
    this.translate.use(this.language);
  }

  ngOnInit() {
    this.language = window[this.config.getAppModuleName()]['language']
    let points: any = [];
    this.route.queryParams
    .subscribe(params => {
    //  console.log(params);
      if (params) {
        points = JSON.parse(params.data);
        points.push({
            lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
            lon: window[this.config.getAppModuleName()]['geolocation']['long'],
            name: 'myPos',
            distance: 0
         });
      }
    });
    this.mapPoints = JSON.stringify(points);
   // console.log(this.mapPoints);
  }

}
