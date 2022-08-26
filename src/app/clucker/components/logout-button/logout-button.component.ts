import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-button',
  template: `
    <button type="button" class="btn-outline" (click)="logout()">Log Out</button>
  `,
  styleUrls: ['./logout-button.component.sass']
})
export class LogoutButtonComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout({action: () => this.router.navigate(['login']) });
  }

}
