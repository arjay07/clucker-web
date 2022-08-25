import {Component, OnInit} from '@angular/core';
import {LandingFormService} from '../../services/landing-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  username = '';
  password = '';

  constructor(public landingFormService: LandingFormService) {
    this.landingFormService.checkRoute();
  }

  ngOnInit(): void {
  }



  login() {
    console.log({
      username: this.username,
      password: this.password
    });
  }

}
