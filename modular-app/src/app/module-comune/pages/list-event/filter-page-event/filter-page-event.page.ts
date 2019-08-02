import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-page-event',
  templateUrl: './filter-page-event.page.html',
  styleUrls: ['./filter-page-event.page.scss'],
})
export class FilterPageEventPage implements OnInit {
  @Input() filters: any;
  constructor(navParams: NavParams, private modalCtrl:ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('filters'));
  }
  ngOnInit() {
  }
closeModal() {
    this.modalCtrl.dismiss();
  }
  filter() {
    this.modalCtrl.dismiss(this.filters);
  }
}
