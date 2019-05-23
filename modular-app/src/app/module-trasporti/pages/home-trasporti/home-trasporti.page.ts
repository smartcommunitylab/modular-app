import { Component, OnInit } from '@angular/core';
import { MainPage } from '../../class/MainPage'
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/module-trasporti/services/config.service';

@Component({
  selector: 'app-home-trasporti',
  templateUrl: './home-trasporti.page.html',
  styleUrls: ['./home-trasporti.page.scss'],
})
export class HomeTrasportiPage extends MainPage implements OnInit {
  primaryLinks: any = [];
  constructor(public translate: TranslateService, private config: ConfigService  ) {
    super(translate);
  }

  ngOnInit() {
    this.translate.get('home_trasporto').subscribe(
      value => {
        console.log(value);
      }
    );
    this.config.getHomeButtons().then(res => {
      this.primaryLinks = res;
    })
  }
  // go(link) {

  //   console.log(link);
  // }
}
