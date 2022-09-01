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

  loadFeedClucks({success, complete}: { success?: (clucks: Page<Cluck>) => void, complete?: () => void}) {
    this.loading = true;
    this.cluck.getClucks().subscribe({
      next: clucks => {
        this.myFeedClucks = clucks;
        if (success) success(clucks);
      },
      complete: () => {
        this.loading = false;
        if (complete) complete();
      }
    });
  }

  addCluckToFeed(cluck: Cluck) {
    if (this.myFeedClucks) {
      this.myFeedClucks.content = [cluck, ...this.myFeedClucks.content];
    }
  }
}
