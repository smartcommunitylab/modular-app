import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
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
  detail: boolean=false;
  selectedStop: any;
  constructor(private navParams: NavParams,private modalCtrl: ModalController, private transportService: TransportService, private router: Router) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('id') + navParams.get('object'));

  }
  ngOnInit() {
    if (this.navParams.get('object')) {
      this.stop = JSON.parse(this.object);
      this.transportService.getNextTrips(this.stop.agencyId, this.stop.id, NUMBER_OF_TRIP).then((data: any) => {
        console.log(data);
        this.data = data;
        
        for (const k in data) {
         
          this.lines.push(data[k]);
        }
      })

    }
  }
  selectElement(line) {
    this.detail=true;
    console.log(line);
    this.selectedStop=line;
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
