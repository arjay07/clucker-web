import {Component, OnInit} from '@angular/core';
import {LandingFormService} from '../../services/landing-form.service';
import {AuthService} from '@services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  loginError? = '';
  password = '';
  loggingIn = false;

  constructor(public landingFormService: LandingFormService, private auth: AuthService, private router: Router) {
    this.landingFormService.checkRoute();
  }

  ngOnInit(): void {
  }

  login() {
    this.loginError = '';
    this.loggingIn = true;
    if (this.landingFormService.username && this.password) {
      this.auth.login({
        username: this.landingFormService.username,
        password: this.password
      }, {
        success: () => {
          this.router.navigate(['']);
          this.loggingIn = false;
        },
        fail: (errorMessage) => {
          this.loginError = errorMessage;
          this.loggingIn = false;
        }
      });
    }
  }

}
