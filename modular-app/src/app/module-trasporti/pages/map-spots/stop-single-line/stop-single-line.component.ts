import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    labeldelay: string ;
    labeltrips: string ;
    accessibility = false; // shows coulumn of accessibility
    agencyId: any;
    routeId: any;
    data: string = "";
    tripsvalue: string;
  route: string;
  name: string;
  constructor(private translateService: TranslateService) { }

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
    this.name = this.stop.direction;
  }
}
