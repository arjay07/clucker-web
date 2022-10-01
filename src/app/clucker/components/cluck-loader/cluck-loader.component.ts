import {Component, Input, OnInit} from '@angular/core';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import {Subject} from 'rxjs';
import {CluckService} from '@clucker/services/cluck.service';
import {Cluck} from '@models/cluck';
@Component({
  selector: 'app-cluck-loader',
  templateUrl: './cluck-loader.component.html',
  styleUrls: ['./cluck-loader.component.sass']
})
export class CluckLoaderComponent implements OnInit {

  @Input()
  mode!: 'FEED' | 'DISCOVER' | 'SEARCH' | 'QUERY' | 'DEFAULT';
  targetElement: any;

  constructor(public cluckLoader: CluckLoaderService, public cluck: CluckService) {
    this.targetElement = document.querySelector('html');
  }

  ngOnInit(): void {
    this.cluckLoader.loadClucks();
  }

  refreshClucks(event: Subject<any>) {
    switch (this.mode) {
      case 'FEED':
        this.cluckLoader.loadClucks(this.cluck.getPersonalFeed, {
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
    this.cluckLoader.loadMoreClucks();
  }

  trackByCluckId(index: number, cluck: Cluck) {
    return cluck.id;
  }

}
