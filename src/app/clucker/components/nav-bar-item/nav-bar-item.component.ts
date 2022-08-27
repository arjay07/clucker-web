import {Component, Input, OnInit} from '@angular/core';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.sass']
})
export class NavBarItemComponent implements OnInit {

  @Input()
  navRoute = '';

  @Input()
  itemIcon!: IconProp;

  constructor() { }

  ngOnInit(): void {
  }

}
