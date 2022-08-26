import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.sass']
})
export class LandingScreenComponent implements OnInit {

  canGoBack = false;

  constructor(private router: Router) {
    this.router.events.subscribe({
      next: event => {
        this.canGoBack = (this.router.url !== '/get-started');
      }
    })
  }


  ngOnInit(): void {
  }

}
