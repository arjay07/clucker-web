import {Injectable, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnDestroy {

  private history: string[] = [];

  routerEvents$?: Subscription;

  constructor(private router: Router, private location: Location) {
    this.routerEvents$ = this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          this.history.push(event.url);
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerEvents$) {
      this.routerEvents$.unsubscribe();
    }
  }

  back() {
    if (this.history.length) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
