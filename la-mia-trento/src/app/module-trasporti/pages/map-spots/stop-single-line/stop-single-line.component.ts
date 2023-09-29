import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TransportService } from 'src/app/module-trasporti/services/transport.service';
var NUMBER_OF_TRIP = 100;

@Component({
  selector: 'app-stop-single-line',
  templateUrl: './stop-single-line.component.html',
  styleUrls: ['./stop-single-line.component.scss']
})
export class StopSingleLineComponent implements OnInit {
  @Input() stop: any;

  date: Date = new Date();
  color: string = "#123456";
  day: string = this.date.getTime().toString();
  littletable: boolean = true; //change font size of table
  showtrips: boolean = true; // show kind of transportation for course. Used for train
  labeldelay: string;
  labeltrips: string;
  accessibility = false; // shows coulumn of accessibility
  agencyId: any;
  routeId: any;
  data: string = "";
  tripsvalue: string;
  route: string;
  name: string;
  lines: any[] = [];

  constructor(private translateService: TranslateService, private transportService: TransportService) { }

  ngOnInit() {
    console.log(this.stop);
    this.translateService.get('label_delay').subscribe(
      value => {
        this.labeldelay = value;
      }
    );
    this.translateService.get('label_trips').subscribe(
      value => {
        this.labeltrips = value;
      }
    );
    this.data = JSON.stringify(this.stop.times);
    this.route = this.stop.route;
    this.name = this.stop.name;
  }
  ionViewDidEnter() {
    const trasportiTable = document.getElementById('table-tt');
    trasportiTable.addEventListener('changeDateEvent', event => {
      if ((<any>event).detail == "prevDate") {
        this.date.setDate(this.date.getDate() - 1);
      } 
      if ((<any>event).detail == "nextDate") {
        this.date.setDate(this.date.getDate() + 1);
      }
       this.day = this.date.getTime().toString();
      this.transportService.getNextTrips(this.stop.agencyId, this.stop.id, NUMBER_OF_TRIP).then((data: any) => {
        console.log(data);
        this.data = data;
        for (const k in data) {
          this.lines.push(data[k]);
        }
      })
    })
  }
}
