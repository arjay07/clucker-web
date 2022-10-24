import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-screen',
  templateUrl: './discover-screen.component.html',
  styleUrls: ['./discover-screen.component.sass']
})
export class DiscoverScreenComponent implements OnInit {

  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLoading(loading: boolean) {
    this.loading = loading;
  }

}
