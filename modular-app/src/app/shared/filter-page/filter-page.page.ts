import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.page.html',
  styleUrls: ['./filter-page.page.scss'],
})
export class FilterPage implements OnInit {
  @Input() filters: any[];
  selected: boolean;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.selected = this.filters.some(element => element.isChecked);
  }
  closeModal() {
    this.modalCtrl.dismiss(null);
  }
  filter() {
    this.modalCtrl.dismiss(this.filters);
  }
}
