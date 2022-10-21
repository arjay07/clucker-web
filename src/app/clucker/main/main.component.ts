import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '@models/user';
import {AuthService} from '@services/auth.service';
import {CluckService} from '@clucker/services/cluck.service';
import {PostCluck} from '@models/post-cluck';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {

  navRoutes = {
    home: '/',
    discover: '/discover',
    notifications: '/notifications',
    search: '/search'
  };

  currentUser?: User;

  showNewCluckForm = false;

  postCluck$?: Subscription;
  currentUser$?: Subscription;

  constructor(private auth: AuthService, private cluck: CluckService, private cluckLoader: CluckLoaderService) { }

  ngOnInit(): void {
    document.body.classList.add('bg-plain');
    this.currentUser$ = this.auth.currentUser.subscribe({
      next: user => this.currentUser = user
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
    if (this.currentUser$) {
      this.currentUser$.unsubscribe();
    }
    document.body.classList.remove('bg-plain');
  }

  openCreateNewCluck() {
    this.showNewCluckForm = true;
  }

  postCluck(body: PostCluck) {
    this.unsubscribe();
    this.postCluck$ = this.cluck.postCluck(body).subscribe({
      next: (data) => {
        this.cluckLoader.addCluckToFeed(data);
      }
    })
  }

  unsubscribe() {
    if (this.postCluck$) {
      this.postCluck$.unsubscribe();
    }
  }

}
