import {Component, OnInit } from '@angular/core';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-cluck-loader',
  templateUrl: './cluck-loader.component.html',
  styleUrls: ['./cluck-loader.component.sass']
})
export class CluckLoaderComponent implements OnInit {

  targetElement: any;

  constructor(public cluckLoader: CluckLoaderService) {
    this.targetElement = document.querySelector('html');
  }

  ngOnInit(): void {
    this.cluckLoader.loadFeedClucks({});
  }

  refresh(event: Subject<any>) {
    this.cluckLoader.loadFeedClucks({
      complete: () => {
        event.next({});
      }
    });
  }

}
