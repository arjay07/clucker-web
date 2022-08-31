import { Component, OnInit } from '@angular/core';
import {Cluck} from '../../../models/cluck';

@Component({
  selector: 'app-my-feed-screen',
  templateUrl: './my-feed-screen.component.html',
  styleUrls: ['./my-feed-screen.component.sass']
})
export class MyFeedScreenComponent implements OnInit {

  testCluck: Cluck = {
    author: 'testboy',
    authorId: 1,
    body: 'This is a cluck.',
    commentCount: 15,
    commented: false,
    eggRating: 1234,
    id: '',
    lastModified: new Date(),
    liked: 0,
    posted: new Date()
  };

  constructor() { }

  ngOnInit(): void {
  }

}
