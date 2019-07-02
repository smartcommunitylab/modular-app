import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private configService: ConfigService, private router: Router, private navCtrl: NavController) { }
  chooseProfile(type) {
    this.configService.chooseProfile(type).then(() => {
      this.navCtrl.navigateRoot('/home-common');
    }
    )

  }
  ngOnInit() {
    var type = this.configService.getChoosen();
    if (type != null)
      this.configService.setDefaultHome(type).then(() => {
        this.navCtrl.navigateRoot('/home-common');
      })
  }

}
