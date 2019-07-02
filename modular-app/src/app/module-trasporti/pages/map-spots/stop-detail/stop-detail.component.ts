import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { TransportService } from 'src/app/module-trasporti/services/transport.service';
import { Router } from '@angular/router';

var NUMBER_OF_TRIP = 100;
@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.scss']
})
export class StopDetailComponent implements OnInit {
  @Input() id: string;
  @Input() object: string;
  stop: any = {};
  lines: any[] = [];
  data: any = {};
  constructor(private navParams: NavParams, private transportService: TransportService, private router: Router) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('id') + navParams.get('object'));

  }
  ngOnInit() {
    if (this.navParams.get('object')) {
      this.stop = JSON.parse(this.object);
      this.transportService.getNextTrips(this.stop.agencyId, this.stop.id, NUMBER_OF_TRIP).then((data: any) => {
        console.log(data);
        this.data = data;
        //show table with line and expands when u click
        for (const k in data) {
          // console.log(data[k].name + data[k].route);
          this.lines.push(data[k]);
        }
        //         name: "P.Dante Rosmini S.Rocco Povo Polo Soc."
        // route: "13"
      })

    }
  }
  selectElement(line) {
    this.router.navigate(['/timeStop', this.data[line]]);
  }

}
