import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          this.history.push(event.url);
        }
      }
    });
  }

  back() {
    if (this.history.length) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
