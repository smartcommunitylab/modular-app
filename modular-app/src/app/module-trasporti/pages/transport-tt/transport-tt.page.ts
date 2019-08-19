import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { ActivatedRoute } from '@angular/router';
import { Config } from '@ionic/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';
import { DatePipe } from '@angular/common';
import localeit from '@angular/common/locales/it';
import localede from '@angular/common/locales/de';
import localeen from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-transport-tt',
  templateUrl: './transport-tt.page.html',
  styleUrls: ['./transport-tt.page.scss'],
})
export class TransportTtPage implements OnInit {

  ref: string;
  date: Date = new Date();
  color: string = "#123456";
  title: string = "";
  day: string = this.date.getTime().toString();
  datetable: string;
  littletable: boolean = true; //change font size of table
  showtrips: boolean = true; // show kind of transportation for course. Used for train
  labeldelay: string = "RITARDO";
  labeltrips: string = "TIPO";
  accessibility: boolean = false; // shows coulumn of accessibility
  agencyId: any;
  routeId: any;
  data: string = "";
  tripsvalue: string;
  groupId: string;
  lang: string;
  datePipe: DatePipe;
  showHeader: boolean;
  emptyTable: boolean = false;
  noTable: any;
  constructor(private trasportiService: TransportService,
    private loadingController: LoadingController,
    private translate: TranslateService,
    private config: ConfigService,
    private toastController: ToastController,
    private route: ActivatedRoute) {
    var language = this.config.getLanguage();;
    this.translate.use(language);
    this.registerlocale(language);
    this.datePipe = new DatePipe(this.translate.currentLang);
  }

  ngOnInit() {
    this.ref = this.route.snapshot.paramMap.get('ref');;
    this.agencyId = this.route.snapshot.paramMap.get('agencyId');;
    this.routeId = this.route.snapshot.paramMap.get('routeId');
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    this.title = this.route.snapshot.paramMap.get('title');
    this.color = this.route.snapshot.paramMap.get('color');
    this.getTT(this.date.getTime());
    var language = this.config.getLanguage();;
    this.datetable = this.datePipe.transform(this.date, "EEE dd-MM-yyyy")
    this.translate.use(language);
    this.lang = language;
    this.showHeader = (this.ref == 'trains') ? true : false;
    this.translate.get('no_table').subscribe(
      value => {
        this.noTable = value;
      }
    )
  }
  registerlocale(lang): any {
    switch (lang) {
      case "it":
        registerLocaleData(localeit, 'it');

        break;
      case "en":
        registerLocaleData(localeen, 'en');

        break;
      case "de":
        registerLocaleData(localede, 'de');

        break;
      default:
        break;
    }
  }
  changeAccessibility() {
    this.accessibility = !this.accessibility;
  }
  changeSize() {
    this.littletable = !this.littletable;
  }
  ionViewDidEnter() {
    const trasportiTable = document.getElementById('table-tt');
    trasportiTable.addEventListener('changeDateEvent', event => {
      if ((<any>event).detail == "prevDate")
        this.date.setDate(this.date.getDate() - 1);
      if ((<any>event).detail == "nextDate")
        this.date.setDate(this.date.getDate() + 1);
      this.day = this.date.getTime().toString();
      this.datetable = this.datePipe.transform(this.date, "EEE dd-MM-yyyy")
      this.getTT(this.date.getTime());
    })
    trasportiTable.addEventListener('showStopEvent', async (stop) => {
      // console.log(stop);
      const toast = await this.toastController.create({
        message: (<any>stop).detail,
        duration: 2000
      });
      toast.present();
    })
  }
  async getTT(date) {
    this.emptyTable = false;
    const loading = await this.loadingController.create();
    loading.present();
    // var that = this;
    this.trasportiService.getTT(this.agencyId, this.routeId, date).then(
      (data: any) => {
        // get data with delay
        if (!data.tripIds || data.tripIds.length == 0) {
          this.emptyTable = true;
        }
        this.data = JSON.stringify(data);
        //get type
        // var str = "";
        // for (var i = 0; i < data.tripIds.length; i++) {
        //   str = str + this.trasportiService.getTripText(this.agencyId, data.tripIds[0]);
        // }

        // console.log(str);
        // this.tripsvalue = str;
        if (this.agencyId == "10") {
          this.showtrips = false;
        }
        loading.dismiss();
      }, (err) => {
        console.log(err);
        this.data = null;
        loading.dismiss();
      }
    )
  };
};

