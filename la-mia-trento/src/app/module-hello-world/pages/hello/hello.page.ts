import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../utils/utils.service';


@Component({
  selector: 'hello-page',
  templateUrl: 'hello.page.html',
  styleUrls: ['hello.page.scss'],
})


export class HelloPage {



  constructor(    private utils: UtilsService,
    private translate: TranslateService) {
    var language = window[this.utils.getAppModuleName()]['language'];
    this.translate.use(language);

  }

  

  ngOnInit() {

  }

}
