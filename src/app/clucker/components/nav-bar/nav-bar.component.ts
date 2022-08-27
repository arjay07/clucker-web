import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  @Input()
  navRoutes: {
    home: string;
    discover: string;
    search: string;
    notifications: string;
  } = {
    home: '',
    discover: '',
    search: '',
    notifications: ''
  };

  @Output()
  activatePlus = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  activatedPlus() {
    this.activatePlus.emit();
  }

}
