import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appTst]'
})
export class TstDirective {

  constructor(public el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}


// this is called custom directive with handling user events
