import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '@services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  navRoutes = {
    home: '/',
    discover: '/discover',
    notifications: '/notifications',
    search: '/search'
  };

  currentUser?: User;

  showNewCluckForm = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    document.body.classList.add('bg-plain');
    this.auth.currentUser.subscribe({
      next: user => this.currentUser = user
    });
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-plain');
  }

  openCreateNewCluck() {
    this.showNewCluckForm = true;
  }

}
