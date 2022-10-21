import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.sass']
})
export class LandingScreenComponent implements OnInit, OnDestroy {

  canGoBack = false;

  routerEvents$?: Subscription;

  constructor(private router: Router) {
    this.routerEvents$ = this.router.events.subscribe({
      next: () => {
        this.canGoBack = (this.router.url !== '/get-started');
      }
    })
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.routerEvents$) {
      this.routerEvents$.unsubscribe();
    }
  }

}
