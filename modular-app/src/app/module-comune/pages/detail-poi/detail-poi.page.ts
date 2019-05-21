import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-detail-poi',
  templateUrl: './detail-poi.page.html',
  styleUrls: ['./detail-poi.page.scss'],
})
export class DetailPoiPage implements OnInit {
  poi: any;
  contacts: any = {};
  lang = 'it';
  type: string;
  constructor(private router: Router, private route: ActivatedRoute, private dbService: DbService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const id = params.id.split(';')[0]
        console.log(params); // {order: "popular"}
        if (params) {
          this.type = params.type;
          this.dbService.getObjectById(params.id).then(data => {
            this.poi = data.docs[0];
            this.buildContacts();
          });
        }
      });
  }

  buildContacts() {
    this.contacts['address'] = this.poi.address[this.lang];
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
        this.contacts['date'] = this.poi.eventPeriod[this.lang]
      }
      if (this.poi.eventTiming) {
        this.contacts['time'] = this.poi.eventTiming[this.lang]
      }
      if (this.poi.topics) {
        this.contacts['cat'] = this.poi.topics[0];
      }
      if (this.poi.cost && this.poi.cost[this.lang] !== '') {
        this.contacts['price'] = this.poi.cost[this.lang];
      }
    }

    this.contacts = JSON.stringify(this.contacts);
  }
}
