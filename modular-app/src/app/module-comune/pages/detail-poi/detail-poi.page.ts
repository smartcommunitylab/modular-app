import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { UtilsService } from '../../services/utils.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-poi',
  templateUrl: './detail-poi.page.html',
  styleUrls: ['./detail-poi.page.scss'],
})
export class DetailPoiPage implements OnInit {
  poi: any;
  poiInput: any;
  contacts: any = {};
  language: string;
  type: string;
  stringsContact: any;
  altImage: string;

  constructor(private router: Router, private route: ActivatedRoute, private callNumber: CallNumber, private utils: UtilsService, private location: Location, private translate: TranslateService,
    private dbService: DbService, private config: ConfigService) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.objectIds) {
          this.manageoLcalId(params.objectIds);
        } else if (params) {
          this.type = params.type;
          this.dbService.getObjectById(params.id).then(data => {
            this.poiInput = data.docs[0];
            this.buildContacts();
          });
        }
      });
    this.translate.get('alt_image_string').subscribe(
      value => {
        this.altImage = value;
      }
    );
    this.config.getStringContacts(this.translate, this.language).then(strings => {
      this.stringsContact = strings
    });
    const element = document.getElementById('poi-container');

    element.addEventListener('contactClick', async (contact) => {
      // console.log(contact)
      var contactParam = JSON.parse((<any>contact).detail)
      if (contactParam.type == 'phone') {
        this.callNumber.callNumber(contactParam.value, true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));
      }
      if (contactParam.type == 'address') {
        this.utils.openAddressMap(contactParam.value);
        console.log('vai all\'indirizzo' + contactParam.value);
      }
      if (contactParam.type == 'url') {
        this.utils.openUrl(contactParam.value);
        console.log('vai all\'indirizzo' + contactParam.value);
      }
      if (contactParam.type == 'share') {
        this.utils.openShare(contactParam.value);
        console.log('vai all\'indirizzo' + contactParam.value);
      }
    })
  }
  ionViewWillLeave() {
    const element = document.getElementById('poi-container');
    if (element) {
      element.removeEventListener('contactClick', function (e) {
        console.log(e);
      }, false);
    }
  }
  goBack() {
    this.location.back();
  }

  manageoLcalId(objectIds) {
    if (objectIds.length == 1) {
      this.dbService.synch().then(() => {
        this.dbService.getObjectByDataId(objectIds[0]).then(data => {
          this.poiInput = data.docs[0];
          this.poi = data.docs[0];
          this.type = data.docs[0].fromTime ? 'EVENT' : 'POI';
          this.buildContacts();
        });
      });
    }
  }

  buildContacts() {
    const poiElement: any = {};
    if (this.poiInput) {
      if (this.poiInput.title) {
        poiElement.title = this.poiInput.title[this.language];
      }
      if (this.poiInput.subtitle) {
        poiElement.subtitle = this.poiInput.subtitle[this.language];
      }
      if (this.poiInput.description) {
        poiElement.description = this.poiInput.description[this.language];
      }
      if (this.poiInput.image) {
        poiElement.image = this.poiInput.image;
      }
      if (this.poiInput._id) {
        poiElement.id = this.poiInput._id;
      }
      if (this.poiInput.topics) {
        poiElement.cat = this.poiInput.topics;
      }
      if (this.poiInput.eventPeriod) {
        poiElement.date = this.poiInput.eventPeriod[this.language];
      }
      if (this.poiInput.eventTiming) {
        poiElement.time = this.poiInput.eventTiming[this.language];
      }
      if (this.poiInput.info) {
        poiElement.info = this.poiInput.info[this.language];
      }
      if (this.poiInput.address) {
        poiElement.address = this.poiInput.address[this.language];
      }
      if (this.poiInput.description) {
        poiElement.text = this.poiInput.description[this.language];
      }
      if (this.poiInput.category) {
        poiElement.category = this.poiInput.category;
      }
      if (this.poiInput.classification) {
        poiElement.classification = this.poiInput.classification[this.language];
      }
      if (this.poiInput.url) {
        poiElement.url = this.poiInput.url;
      }
      if (this.poiInput.contacts) {
        if (this.poiInput.contacts.phone) {
          poiElement.phone = this.poiInput.contacts.phone;
        }
        if (this.poiInput.contacts.email) {
          poiElement.email = this.poiInput.contacts.email;
        }
      }
      poiElement.infos = JSON.stringify(poiElement);
    }
    this.poi = poiElement;
  }
}
