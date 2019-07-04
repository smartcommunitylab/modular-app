import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { ActivatedRoute } from '@angular/router';
import { Config } from '@ionic/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-transport-tt',
  templateUrl: './transport-tt.page.html',
  styleUrls: ['./transport-tt.page.scss'],
})
export class TransportTtPage implements OnInit {
  date: Date = new Date();
  color: string = "#123456";
  title: string = "";
  day: string = this.date.getTime().toString();
  littletable: boolean = true; //change font size of table
  showtrips: boolean = true; // show kind of transportation for course. Used for train
  labeldelay: string = "RITARDO";
  labeltrips: string = "TIPO";
  accessibility = false; // shows coulumn of accessibility
  agencyId: any;
  routeId: any;
  data: string = "";
  tripsvalue: string;
  constructor(private trasportiService: TransportService, private loadingController: LoadingController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.agencyId = this.route.snapshot.paramMap.get('agencyId');;
    this.routeId = this.route.snapshot.paramMap.get('routeId');
    this.title = this.route.snapshot.paramMap.get('title');
    this.getTT(this.date.getTime());

  }
  ionViewDidEnter() {
    const trasportiTable = document.getElementById('table-tt');
    trasportiTable.addEventListener('changeDateEvent', event => {
      if ((<any>event).detail == "prevDate")
        this.date.setDate(this.date.getDate() - 1);
      if ((<any>event).detail == "nextDate")
        this.date.setDate(this.date.getDate() + 1);
      this.day = this.date.getTime().toString();
      this.getTT(this.date.getTime());
    })
    trasportiTable.addEventListener('showStopEvent', () => {
      console.log("stop click");
    })
  }
  async getTT(date) {
    const loading = await this.loadingController.create();
    loading.present();
    // var that = this;
    this.trasportiService.getTT(this.agencyId, this.routeId, date).then(
      (data: any) => {
        // get data with delay
        this.data = JSON.stringify(data);
        //get type
        var str = "";
        for (var i = 0; i < data.tripIds.length; i++) {
          str = str + this.trasportiService.getTripText(this.agencyId, data.tripIds[0]);
        }

        console.log(str);
        this.tripsvalue=str;
        if (this.tripsvalue==""){
          this.showtrips =false;
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

