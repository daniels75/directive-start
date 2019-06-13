import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'silver';

  constructor(private elementRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "orange");
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // 2 approaches - comment one of following line out
    this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "blue");
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "yellow");
    // 2 approaches
    this.backgroundColor = 'transparent';
  }
}
