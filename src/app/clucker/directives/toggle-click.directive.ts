import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[toggleClick]'
})
export class ToggleClickDirective {

  @Input()
  toggleClick = false;

  @Output()
  toggleClickChange = new EventEmitter<boolean>();

  @Output()
  whenTrue = new EventEmitter();

  @Output()
  whenFalse = new EventEmitter();

  @HostListener('click')
  click() {
    this.toggleClick ? this.whenTrue.emit() : this.whenFalse.emit();
    this.toggleClick = !this.toggleClick;
    this.toggleClickChange.emit(this.toggleClick);
  }

  constructor() { }



}
