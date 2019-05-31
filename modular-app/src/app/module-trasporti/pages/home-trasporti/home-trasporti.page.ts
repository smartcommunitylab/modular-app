import { Component, OnInit } from '@angular/core';
import { MainPage } from '../../class/MainPage'
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/module-trasporti/services/config.service';
import { DbService } from '../../services/db.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home-trasporti',
  templateUrl: './home-trasporti.page.html',
  styleUrls: ['./home-trasporti.page.scss'],
})
export class HomeTrasportiPage extends MainPage implements OnInit {
  primaryLinks: any = [];
  constructor(private loadingController: LoadingController, public translate: TranslateService, private dbService: DbService, private config: ConfigService  ) {
    super(translate);
  }
 
  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.dbService.Init().then(function() {
      loading.dismiss();
    }, function(err){
      loading.dismiss();
    })
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
