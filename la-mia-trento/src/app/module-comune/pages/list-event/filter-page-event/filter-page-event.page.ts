import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-filter-page-event',
  templateUrl: './filter-page-event.page.html',
  styleUrls: ['./filter-page-event.page.scss'],
})
export class FilterPageEventPage implements OnInit {
  @Input() filters: any;
  selected = false;
  original:any;
  private backbuttonSubscription: Subscription;

  constructor(navParams: NavParams, private modalCtrl: ModalController) {
    console.log(navParams.get('filters'));

  }




ngOnDestroy() {
    this.backbuttonSubscription.unsubscribe();
}
  ngOnInit() {
    const event = fromEvent(document, 'backbutton');
    this.backbuttonSubscription = event.subscribe(async () => {
        const modal = await this.modalCtrl.getTop();
        if (modal) {
            modal.dismiss();
        }
    });
    this.original = this.filters.map(x => Object.assign({}, x)); 
        this.filters.forEach(element => {
          if (element.isChecked)
            return this.selected = true;
        });
  }
  closeModal() {
    this.modalCtrl.dismiss(this.original);
  }
  filter() {
    this.modalCtrl.dismiss(this.filters);
  }
}
