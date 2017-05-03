import { Directive, Renderer2, ElementRef, Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // @Input() open: string;

  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // ngOnInit() {
  //   this.renderer.setAttribute(this.elRef.nativeElement, "open", null);
  // }

}
