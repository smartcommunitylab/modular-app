import { Component, OnInit } from '@angular/core';

import {  ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../../services/util.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-streets',
  templateUrl: './list-streets.page.html',
  styleUrls: ['./list-streets.page.scss'],
})
export class ListStreetsPage implements OnInit {
  streets: any = null;
  date:any;
  language: any;
  constructor(private translate: TranslateService,
    private datePipe: DatePipe,
    private util: UtilService,
    private route: ActivatedRoute) { 
    this.language = window[this.util.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }
  ngOnInit() {



    /** Parse URL params */
    try {
      this.route.queryParams
        .subscribe(params => {
          if (params.streets)
            this.streets = JSON.parse(params.streets);
          if (params.date)
            this.date = params.date;
            if (this.streets)
          this.streets.forEach(s => {
              s.cleaningDayStr = this.datePipe.transform(s.cleaningDay, 'dd/MM/yyyy');
              let tmp = new Date(s.stopStartingTime).toLocaleTimeString('it-IT').split(':');
              s.stopStartingTimeStr = `${tmp[0]}:${tmp[1]}`;
              tmp = new Date(s.stopEndingTime).toLocaleTimeString('it-IT').split(':');
              s.stopEndingTimeStr = `${tmp[0]}:${tmp[1]}`;
              s.centralCoordStr = JSON.stringify(s.centralCoords);
              s.idNumber = parseInt(s.streetCode.replace(/\_/g, ''), 10);
            });
        });
    } catch { }
  }
}
