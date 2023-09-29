import 'la-mia-trento-comune';

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wc-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>'
})
export class TabsComponent {
  constructor() { }

  ngOnInit() {
    
  }

}
