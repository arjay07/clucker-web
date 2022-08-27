import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.sass']
})
export class TitleBarComponent implements OnInit {

  appTitle = 'Title';

  constructor(private router: Router) {
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

}
