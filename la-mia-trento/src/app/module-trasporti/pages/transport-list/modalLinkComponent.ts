import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-link',
  templateUrl: './modal-link-component.html',
  styleUrls: ['./modal-link-component.scss'],
})
export class ModalLinkComponent implements OnInit {
  @Input() links: any;
  private backbuttonSubscription: Subscription;


  constructor(navParams: NavParams, private modalCtrl:ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('links'));
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
  }
closeModal() {
    this.modalCtrl.dismiss(null);
  }
  openLink(link) {
    window.open(link, '_system', 'location=yes'); return false;
  }
}


