import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './end-session.page.html',
})
export class EndSessionPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.endSessionCallback();
  }
}
