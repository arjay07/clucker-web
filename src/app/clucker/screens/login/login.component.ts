import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  errorMessage?: string;
  loggingIn = false;

  loginForm = this.fb.group({
    username: [ '', Validators.required ],
    password: [ '', Validators.required ]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loggingIn = true;
    this.errorMessage = undefined;
    const { username, password } = this.loginForm.value;
    this.auth.login({
      username: username!,
      password: password!
    }, {
      success: () => {
        this.loggingIn = false;
        this.router.navigate([ '' ]);
      },
      fail: (errorMessage) => {
        this.errorMessage = errorMessage;
        this.loggingIn = false;
      }
    })
  }

}
