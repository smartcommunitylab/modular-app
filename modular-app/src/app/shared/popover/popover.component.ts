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

  radioSelected(input: any) {
    this.selected = input;
  }
  close() {
    this.pop.dismiss();
    this.events.publish('radio:selected', this.selected);
  }

}
