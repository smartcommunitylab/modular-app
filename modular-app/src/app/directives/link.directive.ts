import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[href]'
})
export class LinkDirective {
  @Input() href;
  constructor() { }
  @HostListener('click', ['$event']) onClick($event){
    console.log('execute directive')
    $event.preventDefault();
    if (this.href.indexOf('http://') == 0 || this.href.indexOf('https://') == 0 || this.href.indexOf('mailto:') == 0 || this.href.indexOf('tel:') == 0 || this.href.indexOf('sms:') == 0) {
              window.open(this.href, '_system');
            } 
    console.info('clicked: ' + $event);
}
}
