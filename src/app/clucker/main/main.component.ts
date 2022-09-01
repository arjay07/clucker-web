import { Component, OnInit } from '@angular/core';
import {User} from '@models/user';
import {AuthService} from '@services/auth.service';
import {CluckService} from '@clucker/services/cluck.service';
import {PostCluck} from '@models/post-cluck';
import {Page} from '@models/page';
import {Cluck} from '@models/cluck';
import {MyFeedScreenComponent} from '@clucker/screens/my-feed-screen/my-feed-screen.component';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  navRoutes = {
    home: '/',
    discover: '/discover',
    notifications: '/notifications',
    search: '/search'
  };

  currentUser?: User;

  showNewCluckForm = false;

  constructor(private auth: AuthService, private cluck: CluckService, private cluckLoader: CluckLoaderService) { }

  ngOnInit(): void {
    document.body.classList.add('bg-plain');
    this.auth.currentUser.subscribe({
      next: user => this.currentUser = user
    });
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-plain');
  }

  openCreateNewCluck() {
    this.showNewCluckForm = true;
  }

  postCluck(body: PostCluck) {
    this.cluck.postCluck(body).subscribe({
      next: (data) => {
        this.cluckLoader.addCluckToFeed(data);
      }
    })
  }

}
