import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-detail-poi',
  templateUrl: './detail-poi.page.html',
  styleUrls: ['./detail-poi.page.scss'],
})
export class DetailPoiPage implements OnInit {
  poi: any;
  contacts: any = {};
  language: string;
  type: string;
  constructor(private router: Router, private route: ActivatedRoute, private dbService: DbService, private config: ConfigService) {
    this.language = window[this.config.getAppModuleName()]['language'];
   }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.objectIds) {
          this.manageoLcalId(params.objectIds);
        } else if (params) {
          this.type = params.type;
          this.dbService.getObjectById(params.id).then(data => {
            this.poi = data.docs[0];
            this.buildContacts();
          });
        }
      });
  }
  manageoLcalId(objectIds) {
    if (objectIds.length == 1) {
      this.dbService.getObjectByDataId(objectIds[0]).then(data => {
        this.poi = data.docs[0];
        this.type = data.docs[0].fromTime ? 'EVENT' : 'POI';
        this.buildContacts();
      });
    }
  }
  buildContacts() {
    if (this.contacts) {
      this.contacts['address'] = this.poi.address[this.language];
    }
    if (this.type === 'POI') {
      if (this.poi.contacts.email && this.poi.contacts.email !== '') {
        this.contacts['email'] = this.poi.contacts.email;
      }
      if (this.poi.contacts.phone && this.poi.contacts.phone !== '') {
        this.contacts['phone'] = this.poi.contacts.phone;
      }
      if (this.poi.url && this.poi.url !== '') {
        this.contacts['url'] = this.poi.url;
      }
      this.contacts['distance'] = 0; // TOFIX

    } else if (this.type === 'EVENT') {
      if (this.poi.eventPeriod) {
        this.contacts['date'] = this.poi.eventPeriod[this.language];
      }
      if (this.poi.eventTiming) {
        this.contacts['time'] = this.poi.eventTiming[this.language];
      }
      if (this.poi.topics) {
        this.contacts['cat'] = this.poi.topics[0];
      }
      if (this.poi.cost && this.poi.cost[this.language] !== '') {
        this.contacts['price'] = this.poi.cost[this.language];
      }
    }

    this.contacts = JSON.stringify(this.contacts);
  }
}
