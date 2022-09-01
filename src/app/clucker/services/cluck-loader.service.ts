import { Injectable } from '@angular/core';
import {CluckService} from '@clucker/services/cluck.service';
import {Page} from '@models/page';
import {Cluck} from '@models/cluck';

@Injectable({
  providedIn: 'root'
})
export class CluckLoaderService {

  loading = false;

  myFeedClucks?: Page<Cluck>;

  constructor(private cluck: CluckService) { }

  loadFeedClucks() {
    this.loading = true;
    this.cluck.getClucks().subscribe({
      next: clucks => {
        this.myFeedClucks = clucks;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  addCluckToFeed(cluck: Cluck) {
    if (this.myFeedClucks) {
      this.myFeedClucks.content = [cluck, ...this.myFeedClucks.content];
    }
  }
}
