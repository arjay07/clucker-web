import {Component, Input, OnInit} from '@angular/core';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import {Subject} from 'rxjs';
import {Cluck} from '@models/cluck';
@Component({
  selector: 'app-cluck-loader',
  templateUrl: './cluck-loader.component.html',
  styleUrls: ['./cluck-loader.component.sass']
})
export class CluckLoaderComponent implements OnInit {

  @Input()
  mode!: 'FEED' | 'DISCOVER' | 'SEARCH' | 'DEFAULT';
  targetElement: any;

  constructor(public cluckLoader: CluckLoaderService) {
    this.targetElement = document.querySelector('html');
  }

  ngOnInit(): void {
    this.cluckLoader.loadFeedClucks({});
  }

  refreshClucks(event: Subject<any>) {
    switch (this.mode) {
      case 'FEED':
        this.cluckLoader.loadFeedClucks({
          complete: () => {
            event.next({});
          }
        });
        break;
      default:
        console.error(`Unimplemented CluckLoader mode: ${this.mode}`);
        break;
    }
  }

  loadMore() {
    this.cluckLoader.loadMoreFeedClucks();
  }

  trackByCluckId(index: number, cluck: Cluck) {
    return cluck.id;
  }

}
