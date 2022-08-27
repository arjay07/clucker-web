import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {filter} from 'rxjs';
import {ActiveNavRoute} from '../../../types/ActiveNavRoute';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  activeNavRoute?: ActiveNavRoute;

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

  constructor(private router: Router) {
    this.router.events
      .subscribe((e) => {
        if (e instanceof ActivationEnd) {
          if (e.snapshot.data['activeNavRoute'])
            this.activeNavRoute = e.snapshot.data['activeNavRoute'];
        }
      });
  }

  ngOnInit(): void {
  }

  activatedPlus() {
    this.activatePlus.emit();
  }

}
