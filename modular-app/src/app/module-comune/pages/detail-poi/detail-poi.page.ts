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

  constructor(private router: Router, private route: ActivatedRoute, private dbService: DbService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        if (params) {
          this.dbService.getObjectById(params.id).then(data => {
            this.poi = data.docs[0];
            this.buildContacts();
          });
        }
      });
  }

  buildContacts() {
    this.contacts['address'] = this.poi.address[this.lang];
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

    this.contacts = JSON.stringify(this.contacts);
    console.log(this.contacts)
  }
}
