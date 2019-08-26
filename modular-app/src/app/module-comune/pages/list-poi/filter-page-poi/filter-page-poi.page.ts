import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-page-poi',
  templateUrl: './filter-page-poi.page.html',
  styleUrls: ['./filter-page-poi.page.scss'],
})
export class FilterPagePoiPage implements OnInit {
  @Input() filters: any;
  selected: boolean;
  constructor(navParams: NavParams, private modalCtrl:ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('filters'));
  }
  ngOnInit() {
    this.filters.forEach(element => {
      if (element.isChecked)
        return this.selected = true;
    });
  }
closeModal() {
    this.modalCtrl.dismiss(this.filters);
  }
  filter() {
    this.modalCtrl.dismiss(this.filters);
  }
}
