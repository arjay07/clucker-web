import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '@services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-my-feed-screen',
  templateUrl: './my-feed-screen.component.html',
  styleUrls: ['./my-feed-screen.component.sass']
})
export class MyFeedScreenComponent implements OnInit, OnDestroy {

  loading = false;

  following = false;

  self$?: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.self$ = this.userService.self.subscribe(user => {
      this.following = user.followingCount > 0;
    });
  }

  ngOnDestroy() {
    if (this.self$) {
      this.self$.unsubscribe();
    }
  }

}
