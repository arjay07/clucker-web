import { Injectable } from '@angular/core';
import {CluckService} from '@clucker/services/cluck.service';
import {Page} from '@models/page';
import {Cluck} from '@models/cluck';
import {CluckLoaderFunction} from '@interfaces/cluck-loader-function.type';

@Injectable({
  providedIn: 'root'
})
export class CluckLoaderService {

  loading = false;

  clucks: Cluck[] = [];
  page?: Page<Cluck>;
  currPage = 0;

  constructor(private cluck: CluckService) { }

  loadClucks(observable: CluckLoaderFunction = this.cluck.getPersonalFeed, {success, complete}: { success?: (clucks: Page<Cluck>) => void, complete?: () => void} = {}) {
    this.loading = true;
    this.currPage = 0;
    this.clucks = [];
    observable.bind(this.cluck)().subscribe({
      next: clucks => {
        this.page = clucks;
        this.clucks = clucks.content;
        if (success) success(clucks);
      },
      complete: () => {
        this.loading = false;
        if (complete) complete();
      }
    });
  }

  loadMoreClucks(observable: CluckLoaderFunction = this.cluck.getPersonalFeed) {
    if (!this.page!.last) {
      this.loading = true;
      this.currPage++;
      observable.bind(this.cluck)({ page: this.currPage }).subscribe({
        next: clucks => {
          this.page = clucks;
          this.clucks.push(...clucks.content);
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }

  addCluckToFeed(cluck: Cluck, end: boolean = false) {
    if (this.clucks) {
      this.clucks.unshift(cluck);
    }
  }
}
