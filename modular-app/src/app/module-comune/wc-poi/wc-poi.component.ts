import 'wcs-comune';

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wc-poi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>'
})
export class PoiComponent {
  constructor() { }

  ngOnInit() {
    //qui va la logica che gestisce menu e sottomenu e i parametri di input
  }
}
