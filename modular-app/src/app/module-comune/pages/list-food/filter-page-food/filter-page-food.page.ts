import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-page-food',
  templateUrl: './filter-page-food.page.html',
  styleUrls: ['./filter-page-food.page.scss'],
})
export class FilterPageFoodPage implements OnInit {
  @Input() filters: any;
  selected: boolean;
  original: any;
  constructor(navParams: NavParams, private modalCtrl:ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('filters'));
  }
  ngOnInit() {
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
