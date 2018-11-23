import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDirtest]'
})
export class DirtestDirective implements OnInit {

  @Input() onecolor: string;

  defaultColor = 'black';

  constructor(private el:ElementRef, private ren: Renderer2) { 
    // ren.setStyle(el.nativeElement, 'color', this.defaultColor);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ren.setStyle(this.el.nativeElement, 'color', this.defaultColor)
    console.log(this.defaultColor)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.ren.setStyle(this.el.nativeElement, 'color', this.onecolor)
    console.log(this.onecolor)
  }

  // @HostListener('mousemove') onmousemove() {
  //   this.ren.setStyle(this.el.nativeElement, 'color', this.onecolor);
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.ren.setStyle(this.el.nativeElement, 'color', this.onecolor);
  // }

  
}
