import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController, Events } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  data: any = [];
  pop: PopoverController;
  selected: any;
  constructor(private navParams: NavParams, public events: Events) {  }

  ngOnInit() {
    this.data = [];
    this.data = this.navParams.get('elements');
    if (!this.data.includes('Tutto')) {
      this.data.push('Tutto');
    }
    this.pop = this.navParams.get('controller');
  }

  ionViewDidEnter(){
    const tmp = Array.prototype.slice.call(document.getElementsByTagName('ion-radio'));
    tmp.forEach(element => {
      element.shadowRoot.querySelector('button').setAttribute('style', 'z-index:-2; background:white;');
    });
  }

  radioSelected(input: any) {
    this.selected = input;
  }
  close() {
    this.pop.dismiss();
    this.events.publish('radio:selected', this.selected);
  }

}
