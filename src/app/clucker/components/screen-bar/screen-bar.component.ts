import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {NavigationService} from '@services/navigation.service';

@Component({
  selector: 'app-screen-bar',
  templateUrl: './screen-bar.component.html',
  styleUrls: ['./screen-bar.component.sass']
})
export class ScreenBarComponent implements OnInit {

  appTitle = 'Title';

  constructor(private router: Router, private navigation: NavigationService) {
    this.router.events
      .subscribe((e) => {
        if (e instanceof ActivationEnd) {
          if (e.snapshot.data['title'])
            this.appTitle = e.snapshot.data['title'];
        }
      });
  }

  ngOnInit(): void {
  }

  goBack() {
    this.navigation.back();
  }

}
