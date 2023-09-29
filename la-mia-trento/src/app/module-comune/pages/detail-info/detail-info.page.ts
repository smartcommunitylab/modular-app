import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { UtilsService } from '../../services/utils.service';
@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.page.html',
  styleUrls: ['./detail-info.page.scss'],
})
export class DetailInfoPage implements OnInit {



    info: any;
    details: any[]=[];
    language="it";
    constructor(private router: Router, private utils: UtilsService, private route: ActivatedRoute, private dbService: DbService) { }
  
    ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
          console.log(params); // {order: "popular"}
          if (params) {
            var info = JSON.parse(params.info);
            this.info = info;
          }
        });
    }
    share() {
      this.utils.openShare(JSON.stringify(this.info));
    }
    ionViewDidEnter() {
      if (this.info && this.info.objectIds)
        this.dbService.getObjectById( this.info.objectIds[0]).then((data) => {
          this.details.push(this.convertInfo(data.docs[0]));
        });
      // this.dbService.getPois().then((data) => {
      //   this.pois = data.map(x => this.convertPois(x));
      // });
  
    }
    convertInfo(x) {
      var categoryElement: any = {};
      categoryElement.id = x.id;
      if (x) {
        if (x.name)
          categoryElement.name = x.name[this.language];
        if (x.title)
          categoryElement.title = x.title[this.language];
        if (x.description)
          categoryElement.description = x.description[this.language];
  
      }
      return categoryElement
    }
  }
  
