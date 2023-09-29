import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

var PROFILE_ACC = "_accesibility";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private configService: ConfigService) { }

  setAccessibility(acc) {
    localStorage.setItem(this.configService.getAppId() + PROFILE_ACC, acc);
  };
  getAccessibility() {
    return JSON.parse(localStorage.getItem(this.configService.getAppId() + PROFILE_ACC));
  };

}
