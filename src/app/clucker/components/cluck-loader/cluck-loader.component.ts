import {Component, Input, OnInit} from '@angular/core';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import {Subject} from 'rxjs';
import {CluckService} from '@clucker/services/cluck.service';
import {Cluck} from '@models/cluck';
import {PageParams} from '@models/page';
import {AuthService} from '@services/auth.service';

@Component({
  selector: 'app-cluck-loader',
  templateUrl: './cluck-loader.component.html',
  styleUrls: ['./cluck-loader.component.sass']
})
export class CluckLoaderComponent implements OnInit {

  @Input()
  mode!: 'FEED' | 'DISCOVER' | 'SEARCH' | 'QUERY' | 'MY_CLUCKS' | 'USER_CLUCKS' | 'DEFAULT';
  targetElement: any;

  @Input()
  params?: PageParams;

  activeCluck?: Cluck;

  @Input()
  userId?: number;

  showComments = false;

  constructor(public cluckLoader: CluckLoaderService, private cluck: CluckService, private auth: AuthService) {
    this.targetElement = document.querySelector('html');
  }

  ngOnInit(): void {
    this.loadClucks();
  }

  refreshClucks(event: Subject<any>) {
    this.loadClucks({
      complete: () => {
        event.next({});
      }
    })
  }

  loadClucks(callbacks?: { success?: () => void, complete?: () => void }) {
    if (this.mode === 'FEED') {
      this.cluckLoader.loadClucks(this.cluck.getPersonalFeed, callbacks);
    } else if (this.mode === 'QUERY') {
      this.cluckLoader.loadClucks(() => this.cluck.getClucks(this.params), callbacks);
    } else if (this.mode === 'MY_CLUCKS') {
      this.auth.currentUser.subscribe(user => {
        this.cluckLoader.loadClucks(() => this.cluck.getUserClucks(user.id), callbacks);
      });
    } else if (this.mode === 'USER_CLUCKS') {
      if (!this.userId)
        throw new Error('\'userId\' is required with CluckLoader mode USER_CLUCKS.');
      this.cluckLoader.loadClucks(() => this.cluck.getUserClucks(this.userId!), callbacks);
    } else {
      console.error(`Unimplemented CluckLoader mode: ${this.mode}`);
    }
  }

  loadMore() {
    this.cluckLoader.loadMoreClucks();
  }

  trackByCluckId(index: number, cluck: Cluck) {
    return cluck.id;
  }

  openCommentScreen(commentCluck: Cluck) {
    this.activeCluck = commentCluck;
    this.showComments = true;
  }

  activeCluckChanged(cluck: Cluck) {
    if (this.activeCluck) {
      const index = this.cluckLoader.clucks.indexOf(this.activeCluck);
      this.activeCluck = cluck;
      this.cluckLoader.clucks[index] = cluck;
    }
  }

}
