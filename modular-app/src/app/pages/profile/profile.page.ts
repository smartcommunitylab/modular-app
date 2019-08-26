import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  benvenuto: string;
  sub1: string;
  text1: string;
  sub2: string;
  text2: string;
  sub3: string;
  text3: string;

  constructor(private configService: ConfigService, private translate: TranslateService, private config: ConfigService, private navCtrl: NavController, private alertController: AlertController) { }
  chooseProfile(type) {
    this.configService.chooseProfile(type).then(() => {
      this.navCtrl.navigateRoot('/home-common');
    }
    )

  }
  getStrings(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.translate.get('user_title').subscribe(
        value => {
          this.benvenuto = value;
          this.sub1 = this.translate.instant('user_subtitle1');
          this.text1 = this.translate.instant('user_text1');
          this.sub2 = this.translate.instant('user_subtitle2');
          this.text2 = this.translate.instant('user_text2');
          this.sub3 = this.translate.instant('user_subtitle3');
          this.text3 = this.translate.instant('user_text3');
          resolve(true);
        }, err => {
          resolve(false);
        });
    })
  }
  ngOnInit() {
    this.getStrings().then((value) => {
      var type = this.configService.getChoosen();
      if (type != null)
        this.configService.setDefaultHome(type).then(() => {
          if (this.config.getVersion() == 'test') {
            if (!this.config.isExpired()) {
              this.config.showPopupExpiring()
            }
            else {
              this.config.showPopUpExpired();
            }
          }
          this.navCtrl.navigateRoot('/home-common');
        })
      else {

        if (value)
          this.presentAlert();
        if (this.config.getVersion() == 'test') {
          if (!this.config.isExpired()) {
            this.config.showPopupExpiring()
          }
          else {
            this.config.showPopUpExpired();
          }
        }
      }

    })


  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '<div>' +
        `<div class="title">` + this.benvenuto + `</div>
      <div class="hl"></div>
      <div class="subtitle">`+ this.sub1 + `</div>
      <div class"text">`+ this.text1 + `</div></div><div class="subtitle">` + this.sub2 + `</div></div><div class="text">` + this.text2 + `</div>
      <div class="subtitle">`+ this.sub3 + `</div>
      <div class"text">`+ this.text3 + `</div>
      </div>`,
      cssClass: 'welcome',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'ok-prompt',
        }
      ]
    });

    await alert.present();
  }
}
