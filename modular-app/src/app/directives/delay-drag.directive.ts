

// import { Directive, ElementRef, HostListener, Input, OnInit, HostBinding } from '@angular/core';

// @Directive({ selector: `[delayDrag]` })
// export class DelayDragDirective {
//   @Input('delayDrag')
//   public dragDelay: number;

//   private touchTimeout: any;

//   @HostBinding('class.delay-drag-lifted')
//   private draggable: boolean = false;

//   get delay() {
//     // if it's a string, that's because we didn't pass a value (<div delayDragLift></div>)
//     return (typeof this.dragDelay === 'number')
//       ? this.dragDelay
//       : 1000;
//   }

//   @HostListener('touchstart', ['$event'])
//   private onTouchStart(evt: Event): void {
//     this.touchTimeout = setTimeout(() => {
//       this.draggable = true;
//     }, 200);
//   }

//   @HostListener('touchmove', ['$event'])
//   private onTouchMove(evt: Event): void {
//     if (!this.draggable) {
//       evt.stopPropagation();
//       clearTimeout(this.touchTimeout);
//     }
//   }

//   @HostListener('touchend', ['$event'])
//   private onTouchEnd(evt: Event): void {
//     clearTimeout(this.touchTimeout);
//     this.draggable = false;
//   }
// }

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[delayDragLift]' })
export class DelayDragDirective {

    dragDelay: number = 200; // milliseconds
    draggable: boolean = false;
    touchTimeout: any;

    @HostListener('touchmove', ['$event'])
    // @HostListener('mousemove', ['$event'])
    onMove(e: Event) {
      console.log('touchmove')

        if (!this.draggable) {
          console.log('stopPropagation')

            e.stopPropagation();
            clearTimeout(this.touchTimeout);
        }
    }

    @HostListener('touchstart', ['$event'])
    // @HostListener('mousedown', ['$event'])
    onDown(e: Event) {
      console.log('touchstart')
        this.touchTimeout = setTimeout(() => {
            this.draggable = true;
        }, this.dragDelay);
    }

    @HostListener('touchend', ['$event'])
    // @HostListener('mouseup', ['$event'])
    onUp(e: Event) {
      console.log('touchend')

        clearTimeout(this.touchTimeout);
        this.draggable = false;
    }

    constructor(private el: ElementRef) {}
}