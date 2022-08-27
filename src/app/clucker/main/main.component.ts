import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bg-plain');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-plain');
  }

  openCreateNewCluck() {
    console.log('Hello, world!');
  }

}
