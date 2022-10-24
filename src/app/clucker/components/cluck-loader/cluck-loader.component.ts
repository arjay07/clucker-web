import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import {Subject, Subscription} from 'rxjs';
import {CluckService} from '@clucker/services/cluck.service';
import {Cluck} from '@models/cluck';
import {PageParams} from '@models/page';
import {AuthService} from '@services/auth.service';
import {CluckLoaderFunction} from '@interfaces/cluck-loader-function.type';

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

  @Output()
  loading = new EventEmitter<boolean>();

  showComments = false;

  currentUser$?: Subscription;

  constructor(public cluckLoader: CluckLoaderService, private cluck: CluckService, private auth: AuthService) {
    this.targetElement = document.querySelector('html');
  }

  ngOnInit(): void {
    this.loading.emit(true);
    this.loadClucks();
  }

  refreshClucks(event: Subject<any>) {
    this.loading.emit(true);
    this.loadClucks({
      complete: () => {
        event.next({});
        this.loading.emit(false);
      }
    })
  }

  loadClucks(callbacks?: { success?: () => void, complete?: () => void }) {

    const cb = {
      success: callbacks?.success,
      complete: () => {
        this.loading.emit(false);
        if (callbacks && callbacks.complete) {
          callbacks.complete();
        }
      }
    };

    switch (this.mode) {
      case 'FEED':
        this.cluckLoader.loadClucks(this.cluck.getPersonalFeed, cb);
        break;
      case 'QUERY':
        this.cluckLoader.loadClucks(() => this.cluck.getClucks(this.params), cb);
        break;
      case 'MY_CLUCKS':
        this.currentUser$ = this.auth.currentUser.subscribe(user => {
          this.cluckLoader.loadClucks(() => this.cluck.getUserClucks(user.id), cb);
        });
        break;
      case 'USER_CLUCKS':
        if (!this.userId)
          throw new Error('\'userId\' is required with CluckLoader mode USER_CLUCKS.');
        this.cluckLoader.loadClucks(() => this.cluck.getUserClucks(this.userId!), cb);
        break;
      case 'LIKED_CLUCKS':
        if (!this.userId)
          throw new Error('\'userId\' is required with CluckLoader mode LIKED_CLUCKS.');
        this.cluckLoader.loadClucks(() => this.cluck.getLikedClucks(this.userId!), cb);
        break;
      case 'DISCOVER':
        this.cluckLoader.loadClucks(this.cluck.getDiscover, cb);
        break;
      default:
        console.error(`Unimplemented CluckLoader mode: ${this.mode}`);
        break;
    }
  }

  loadMore() {
    switch (this.mode) {
      case 'FEED':
        this.cluckLoader.loadMoreClucks(this.cluck.getPersonalFeed);
        break;
      case 'QUERY':
        this.cluckLoader.loadMoreClucks(() => this.cluck.getClucks(this.params));
        break;
      case 'MY_CLUCKS':
        this.currentUser$ = this.auth.currentUser.subscribe(user => {
          this.cluckLoader.loadMoreClucks(() => this.cluck.getUserClucks(user.id));
        });
        break;
      case 'USER_CLUCKS':
        if (!this.userId)
          throw new Error('\'userId\' is required with CluckLoader mode USER_CLUCKS.');
        this.cluckLoader.loadMoreClucks(() => this.cluck.getUserClucks(this.userId!));
        break;
      case 'LIKED_CLUCKS':
        if (!this.userId)
          throw new Error('\'userId\' is required with CluckLoader mode LIKED_CLUCKS.');
        this.cluckLoader.loadMoreClucks(() => this.cluck.getLikedClucks(this.userId!));
        break;
      case 'DISCOVER':
        this.cluckLoader.loadMoreClucks(this.cluck.getDiscover);
        break;
      default:
        console.error(`Unimplemented CluckLoader mode: ${this.mode}`);
        break;
    }
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
