import {Component, OnInit} from '@angular/core';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';

@Component({
  selector: 'app-my-feed-screen',
  templateUrl: './my-feed-screen.component.html',
  styleUrls: ['./my-feed-screen.component.sass']
})
export class MyFeedScreenComponent implements OnInit {

  constructor(public cluckLoader: CluckLoaderService) { }

  ngOnInit(): void {
    this.cluckLoader.loadFeedClucks();
  }

}
