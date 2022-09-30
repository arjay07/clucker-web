import { Injectable } from '@angular/core';
import {CluckService} from '@clucker/services/cluck.service';
import {Page} from '@models/page';
import {Cluck} from '@models/cluck';

@Injectable({
  providedIn: 'root'
})
export class CluckLoaderService {

  loading = false;

  myFeedClucks: Cluck[] = [];
  myFeedCluckPage?: Page<Cluck>;
  myFeedCurrPage = 0;

  constructor(private cluck: CluckService) { }

  loadFeedClucks({success, complete}: { success?: (clucks: Page<Cluck>) => void, complete?: () => void}) {
    this.loading = true;
    this.myFeedCurrPage = 0;
    this.myFeedClucks = [];
    this.cluck.getPersonalFeed().subscribe({
      next: clucks => {
        this.myFeedCluckPage = clucks;
        this.myFeedClucks = clucks.content;
        if (success) success(clucks);
      },
      complete: () => {
        this.loading = false;
        if (complete) complete();
      }
    });
  }

  loadMoreFeedClucks() {
    if (!this.myFeedCluckPage!.last) {
      this.loading = true;
      this.myFeedCurrPage++;
      this.cluck.getPersonalFeed({ page: this.myFeedCurrPage }).subscribe({
        next: clucks => {
          this.myFeedCluckPage = clucks;
          this.myFeedClucks.push(...clucks.content);
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }

  addCluckToFeed(cluck: Cluck, end: boolean = false) {
    if (this.myFeedClucks) {
      this.myFeedClucks.unshift(cluck);
    }
  }
}
