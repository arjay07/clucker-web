import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DropdownItems} from '../../../types/DropdownItems';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit {

  @ViewChild('toggleButton')
  toggleButton!: ElementRef;

  @ViewChild('menu')
  menu!: ElementRef;

  @Input()
  dropdownItems: DropdownItems = [];

  showing = false;

  constructor(private renderer: Renderer2) {

    renderer.listen('document', 'click', (event) => {
      if (event.target !== this.toggleButton.nativeElement && event.target !== this.menu.nativeElement) {
        this.showing = false;
      }
    });

  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showing = !this.showing;
  }

}
