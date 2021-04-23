import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.fontSize = '20px';
    this.elementRef.nativeElement.style.color = 'yellow';
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.fontSize = 'initial';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.fontWeight = 'initial';
    //this.elementRef.nativeElement.style.backgroundColor = 'initial';
  }
}
