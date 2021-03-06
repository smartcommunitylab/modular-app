import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { ConfigService } from '../../services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
// import { CallNumber } from '@ionic-native/call-number/ngx';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.page.html',
  styleUrls: ['./detail-event.page.scss'],
})
export class DetailEventPage implements OnInit {
  poi: any;
  poiInput: any;
  contacts: any = {};
  language: string;
  type: string;
  stringsContact: any;
  altImage: string;
  paramsSubscription: any;

  constructor(private router: Router, private route: ActivatedRoute,  private utils: UtilsService, private location: Location, private translate: TranslateService,
    private dbService: DbService, private config: ConfigService) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  ngOnInit() {
    this.paramsSubscription = this.route.queryParams
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
        var numberCall = contactParam.value.replace(/\D/g,''); 
        window.open('tel:'+numberCall,  '_system')
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
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
  goBack() {
    this.location.back();
  }
  manageoLcalId(objectIds) {
    if (objectIds.length == 1) {
      this.translate.get('init_db').subscribe(value => {
        this.dbService.synch(value).then(() => {
          this.dbService.getObjectByDataId(objectIds[0]).then(data => {
            this.poiInput = data.docs[0];
            this.poi = data.docs[0];
            this.type = data.docs[0].fromTime ? 'EVENT' : 'POI';
            this.buildContacts();
          });
        })
      })
    }
  }
  share() {
    this.utils.openShare(JSON.stringify(this.poi));
  }
  buildContacts() {
    const poiElement: any = {};
    if (this.poiInput) {
      if (this.poiInput.title) {
        if (this.poiInput.title[this.language])
          poiElement.title = this.poiInput.title[this.language];
        else poiElement.title = this.poiInput.title["it"];
      }
      if (this.poiInput.subtitle) {
        if (this.poiInput.subtitle[this.language])
          poiElement.subtitle = this.poiInput.subtitle[this.language];
        else poiElement.subtitle = this.poiInput.subtitle["it"];
      }
      if (this.poiInput.description) {
        if (this.poiInput.description[this.language])
          poiElement.description = this.poiInput.description[this.language];
        else poiElement.description = this.poiInput.description["it"];
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
        if (this.poiInput.eventPeriod[this.language])
          poiElement.date = this.poiInput.eventPeriod[this.language];
        else poiElement.date = this.poiInput.eventPeriod["it"];
      }
      if (this.poiInput.eventTiming) {
        if (this.poiInput.eventTiming[this.language])
          poiElement.time = this.poiInput.eventTiming[this.language];
        else poiElement.time = this.poiInput.eventTiming["it"];
      }
      if (this.poiInput.info) {
        if (this.poiInput.info[this.language])
          poiElement.info = this.poiInput.info[this.language];
        else poiElement.info = this.poiInput.info["it"];
      }
      if (this.poiInput.address) {
        if (this.poiInput.address[this.language])
          poiElement.address = this.poiInput.address[this.language];
        else poiElement.address = this.poiInput.address["it"];
      }
      if (this.poiInput.description) {
        if (this.poiInput.description[this.language])
          poiElement.text = this.poiInput.description[this.language];
        else this.poiInput.description["it"];
      }
      if (this.poiInput.category) {
        poiElement.category = this.poiInput.category;
      }
      if (this.poiInput.classification) {
        poiElement.classification = this.poiInput.classification[this.language];
        poiElement.classification = this.poiInput.classification[this.language];
        poiElement.classification = this.poiInput.classification["it"];
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
