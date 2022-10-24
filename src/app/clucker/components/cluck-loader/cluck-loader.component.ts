import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import {Subject, Subscription} from 'rxjs';
import {CluckService} from '@clucker/services/cluck.service';
import {Cluck} from '@models/cluck';
import {PageParams} from '@models/page';
import {AuthService} from '@services/auth.service';

@Component({
  selector: 'app-cluck-loader',
  templateUrl: './cluck-loader.component.html',
  styleUrls: ['./cluck-loader.component.sass']
})
export class CluckLoaderComponent implements OnInit, OnDestroy {

  @Input()
  mode!: 'FEED' | 'DISCOVER' | 'SEARCH' | 'QUERY' | 'MY_CLUCKS' | 'USER_CLUCKS' | 'LIKED_CLUCKS' | 'DEFAULT';
  targetElement: any;

  @Input()
  params?: PageParams;

  activeCluck?: Cluck;

  @Input()
  userId?: number;

  showComments = false;

  currentUser$?: Subscription;

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
    switch (this.mode) {
      case 'FEED':
        this.cluckLoader.loadClucks(this.cluck.getPersonalFeed, callbacks);
        break;
      case 'QUERY':
        this.cluckLoader.loadClucks(() => this.cluck.getClucks(this.params), callbacks);
        break;
      case 'MY_CLUCKS':
        this.currentUser$ = this.auth.currentUser.subscribe(user => {
          this.cluckLoader.loadClucks(() => this.cluck.getUserClucks(user.id), callbacks);
        });
        break;
      case 'USER_CLUCKS':
        if (!this.userId)
          throw new Error('\'userId\' is required with CluckLoader mode USER_CLUCKS.');
        this.cluckLoader.loadClucks(() => this.cluck.getUserClucks(this.userId!), callbacks);
        break;
      case 'LIKED_CLUCKS':
        if (!this.userId)
          throw new Error('\'userId\' is required with CluckLoader mode LIKED_CLUCKS.');
        this.cluckLoader.loadClucks(() => this.cluck.getLikedClucks(this.userId!), callbacks);
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

  ngOnDestroy() {
    if (this.currentUser$) {
      this.currentUser$.unsubscribe();
    }
  }

}
