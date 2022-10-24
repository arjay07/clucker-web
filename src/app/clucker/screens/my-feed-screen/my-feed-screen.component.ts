import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-feed-screen',
  templateUrl: './my-feed-screen.component.html',
  styleUrls: ['./my-feed-screen.component.sass']
})
export class MyFeedScreenComponent implements OnInit {

  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLoading(loading: boolean) {
    this.loading = loading;
  }

}
