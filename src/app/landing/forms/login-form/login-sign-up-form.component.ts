import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-sign-up-form.component.html',
  styleUrls: ['./login-sign-up-form.component.sass']
})
export class LoginSignUpFormComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router) {
    const navigation = router.getCurrentNavigation();
    if (!navigation)
      this.routeBackToUsernameForm();
    const extras = navigation!.extras;
    if (!extras)
      this.routeBackToUsernameForm();
    const state = extras.state;
    if (!state)
      this.routeBackToUsernameForm();
    const username = state!['username'];
    if (!username)
      this.routeBackToUsernameForm();
    this.username = state!['username'];
  }

  ngOnInit(): void {
  }

  routeBackToUsernameForm() {
    this.router.navigate(['/']);
  }

  login() {
    console.log({
      username: this.username,
      password: this.password
    });
  }

}
