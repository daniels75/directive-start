import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "yellow");
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // 2 approaches - comment one of following line out
    //this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "orange");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "yellow");
    // 2nd approach
    this.backgroundColor = this.defaultColor;
  }
}
