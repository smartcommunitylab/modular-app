import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { NotificationService } from '../../services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  streets: any;
  language: string;
  constructor(
    private mapSrv: MapService,
    private notSrv: NotificationService,
    private translate: TranslateService,
    private config: ConfigService,
    private platform: Platform
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  ngOnInit() {
    this.streets = this.mapSrv.getData();
    this.platform.ready().then(() => {
      this.notSrv.getNotifications();
    });
  }
}
