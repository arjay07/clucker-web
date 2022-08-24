import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.sass']
})
export class UsernameFormComponent implements OnInit {

  username = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendUsername() {
    const usernameExists = true;

    if (!usernameExists) {
      this.router.navigate([ 'sign-up' ], {state: { 'username': this.username }});
    } else {
      this.router.navigate([ 'login' ], {state: { 'username': this.username }});
    }
  }

}
