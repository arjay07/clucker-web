import {Component, Input, OnInit} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.sass']
})
export class TitleBarComponent implements OnInit {

  appTitle = 'Title';

  @Input()
  user?: User;

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
